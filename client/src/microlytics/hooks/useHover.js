import { useEffect } from 'react';

// microlytics
import { createEvent } from '../index';

const useHover = (ref, metadata, config) => {
  const enter = (event) => {
    createEvent('Hover Enter', metadata, {
      pageLocation: {
        host: window.location.hostname,
        path: window.location.pathname
      },
      timeSincePageLoad: new Date(event.timeStamp).toISOString().substr(11, 11)
    });
  };

  const leave = (event) => {
    createEvent('Hover Exit', metadata, {
      pageLocation: {
        host: window.location.hostname,
        path: window.location.pathname
      },
      timeSincePageLoad: new Date(event.timeStamp).toISOString().substr(11, 11)
    });
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
