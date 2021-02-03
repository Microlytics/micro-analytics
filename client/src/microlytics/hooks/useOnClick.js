import { useEffect } from 'react';

// microlytics
import { createEvent } from '../index';

// Hook
function useOnClick(ref, metadata, config) {
  const listener = (event) => {
    if (ref.current.contains(event.target)) {
      createEvent('Mouse Click', metadata, {
        pageLocation: {
          host: window.location.hostname,
          path: window.location.pathname
        },
        timeSincePageLoad: new Date(event.timeStamp)
          .toISOString()
          .substr(11, 11)
      });
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
