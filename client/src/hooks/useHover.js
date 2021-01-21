import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { MICROLYTICS_HOVER_EVENTS } from './index';

const useHover = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const sendData = (data) => {
    const metaData = {
      metaData: {
        time: new Date(),
        locationData: window.location,
      },
      userData: { ...data },
    };
    return JSON.stringify(metaData);
  };

  const enter = () => {
    const eventObj = {
      event: 'Hover Enter',
      payload: JSON.parse(ref.current.getAttribute('microlytics')),
    };
    dispatch({ type: 'RECORD_EVENT', payload: eventObj });
    MICROLYTICS_HOVER_EVENTS.push(eventObj);
  };
  const leave = () => {
    const eventObj = {
      event: 'Hover Exit',
      payload: JSON.parse(ref.current.getAttribute('microlytics')),
    };
    dispatch({ type: 'RECORD_EVENT', payload: eventObj });
    MICROLYTICS_HOVER_EVENTS.push(eventObj);
  };

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', enter);
      node.addEventListener('mouseout', leave);

      return () => {
        node.removeEventListener('mouseover', enter);
        node.removeEventListener('mouseout', leave);
      };
    }
  }, []);

  return [ref, sendData];
};

export default useHover;
