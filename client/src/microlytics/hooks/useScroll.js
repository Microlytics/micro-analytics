import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';

export function useScroll() {
  const dispatch = useDispatch();

  const handleScroll = (event) => {
    window.removeEventListener('scroll', handleScroll);
    setTimeout(() => {
      let eventObj = {
        id: uuid(),
        event: 'Scroll',
        time: new Date(),
        payload: { scroll: 'Scroll' },
        systemMetaData: {
          scrollY: window.scrollY,
          scrollX: window.scrollX,
          timeSincePageLoad: new Date(event.timeStamp)
            .toISOString()
            .substr(11, 11),
        },
      };
      dispatch({ type: 'RECORD_EVENT', payload: eventObj });
      window.addEventListener('scroll', handleScroll);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
}

export default useScroll;
