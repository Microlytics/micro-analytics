// URL Parameters
const baseUrl = 'https://www.edisonbox.ca';

// hook event logs
export var MICROLYTICS_HOVER_EVENTS = [];

// export functions
function sendHoverEvents() {
    if (MICROLYTICS_HOVER_EVENTS.length > 0) {
        let eventArr = JSON.parse(JSON.stringify(MICROLYTICS_HOVER_EVENTS))
        console.log(eventArr)
        MICROLYTICS_HOVER_EVENTS = [];

        fetch(`${baseUrl}/api/v1/logs/arr`, {
            method: "POST",
            body: JSON.stringify({ dataArray: eventArr }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => console.log('sent'))
            .catch(err => console.log(err));
    } else {
        console.log('nothing sent')
    }

}


function sendData() {
    sendHoverEvents();
    setTimeout(sendData, 5000);
}

sendData();