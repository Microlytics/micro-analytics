import { useEffect } from 'react';
import uuid from 'react-uuid';

// microlytics
import { MICROLYTICS_EVENTS } from '../index';

const useHover = (ref, metadata, config) => {
  const enter = (event) => {
    const eventObj = {
      id: uuid(),
      event: 'Hover Enter',
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
  };

  const leave = (event) => {
    const eventObj = {
      id: uuid(),
      event: 'Hover Exit',
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
  };

  useEffect(() => {
    if (config.hover && config.hover === true) {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseenter', enter);
        node.addEventListener('mouseleave', leave);

        return () => {
          node.removeEventListener('mouseenter', enter);
          node.removeEventListener('mouseleave', leave);
        };
      }
    }
  });
};

export default useHover;
