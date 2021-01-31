// libraries
import uuid from 'react-uuid';

// Varaibles
var trackingKey = '';
var sessionId = '';
var baseUrl = '';
export var MICROLYTICS_EVENTS = [];

const initialize = (key, url = null, id = null) => {
  trackingKey = key;
  sessionId = id ? id : uuid();
  baseUrl = url ? url : 'https://www.edisonbox.ca/api/v1/logs/arr';
  MICROLYTICS_EVENTS = [];
};

const getValues = () => {
  return [trackingKey, sessionId, baseUrl, MICROLYTICS_EVENTS];
};

export { initialize, getValues };

// // hook event logs
// export var MICROLYTICS_HOVER_EVENTS = [];

// // export functions
// function sendHoverEvents() {
//   if (MICROLYTICS_HOVER_EVENTS.length > 0) {
//     let eventArr = JSON.parse(JSON.stringify(MICROLYTICS_HOVER_EVENTS));
//     console.log(eventArr);
//     MICROLYTICS_HOVER_EVENTS = [];

//     fetch(`${baseUrl}/api/v1/logs/arr`, {
//       method: 'POST',
//       body: JSON.stringify({ dataArray: eventArr }),
//       headers: { 'Content-type': 'application/json; charset=UTF-8' },
//     })
//       .then((response) => console.log('sent'))
//       .catch((err) => console.log(err));
//   } else {
//     console.log('nothing sent');
//   }
// }

function sendData() {
  console.log(new Date());
  console.log(MICROLYTICS_EVENTS);
  setTimeout(sendData, 5000);
}

sendData();
