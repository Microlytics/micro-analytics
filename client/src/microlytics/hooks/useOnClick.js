import { useEffect } from 'react';
import uuid from 'react-uuid';

// microlytics
import { MICROLYTICS_EVENTS } from '../index';

// Hook
function useOnClick(ref, metadata, config) {
  const listener = (event) => {
    if (ref.current.contains(event.target)) {
      let eventObj = {
        id: uuid(),
        event: 'Mouse Click',
        payload: metadata,
        time: new Date(),
        systemMetaData: {
          pageLocation: {
            host: window.location.hostname,
            path: window.location.pathname,
          },
          timeSincePageLoad: new Date(event.timeStamp)
            .toISOString()
            .substr(11, 11),
        },
      };
      MICROLYTICS_EVENTS.push(eventObj);
    }
  };

  useEffect(() => {
    if (config.click && config.click === true) {
      document.addEventListener('click', listener);

      return () => {
        document.removeEventListener('click', listener);
      };
    }
  });
}

export default useOnClick;
