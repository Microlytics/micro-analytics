// libraries
import uuid from 'react-uuid';

// microlytics import
import Microlytics from './components/Microlytics';

// Varaibles
var trackingKey = '';
var sessionId = uuid();
var baseUrl = 'https://www.edisonbox.ca/api/v1/logs/arr';
export var MICROLYTICS_EVENTS = [];

const initialize = (key, url = null, id = null) => {
  trackingKey = key;
  sessionId = id ? id : sessionId;
  baseUrl = url ? url : baseUrl;
  MICROLYTICS_EVENTS = [];

  sendData();
};

const getValues = () => {
  return [trackingKey, sessionId, baseUrl, MICROLYTICS_EVENTS];
};

// export functions
function sendHoverEvents() {
  if (MICROLYTICS_EVENTS.length > 0 && trackingKey !== '') {
    const eventsLength = MICROLYTICS_EVENTS.length;

    let eventArr = MICROLYTICS_EVENTS.slice(0, eventsLength - 1);
    MICROLYTICS_EVENTS = MICROLYTICS_EVENTS.slice(eventsLength);

    fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify({ dataArray: eventArr }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).catch((err) => console.log(err));
  }
}

function sendData() {
  sendHoverEvents();
  setTimeout(sendData, 5000);
}

export { initialize, getValues, Microlytics };
