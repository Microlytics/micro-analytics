// libraries
import uuid from 'react-uuid';

// microlytics import
import Microlytics from './components/Microlytics';

// Varaibles
var trackingKey = '';
var sessionId = uuid();
var baseUrl = 'https://www.edisonbox.ca/api/v1/logs/arr';
var userObj = {};
export var MICROLYTICS_EVENTS = [];

const initialize = (key, url = null) => {
  trackingKey = key;
  baseUrl = url ? url : baseUrl;
  MICROLYTICS_EVENTS = [];
};

const getValues = () => {
  return [trackingKey, sessionId, baseUrl, MICROLYTICS_EVENTS];
};

const initializeUser = (user) => {
  userObj = user;
};

// export functions
function sendHoverEvents(session, key, user) {
  if (MICROLYTICS_EVENTS.length > 0 && trackingKey !== '') {
    const eventsLength = MICROLYTICS_EVENTS.length;

    let eventArr = MICROLYTICS_EVENTS.slice(0, eventsLength - 1);
    MICROLYTICS_EVENTS = MICROLYTICS_EVENTS.slice(eventsLength);

    const body = {
      dataArray: eventArr,
      sessionId: session,
      trackingKey: key
    };

    if (user !== {}) {
      body.user = user;
    }

    fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    }).catch((err) => console.log(err));
  }
}

function sendData() {
  sendHoverEvents(trackingKey, sessionId, userObj);
  setTimeout(sendData, 5000);
}

sendData();

export { initialize, getValues, Microlytics, initializeUser };
