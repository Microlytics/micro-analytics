import { useEffect, useRef } from 'react'
import { MICROLYTICS_HOVER_EVENTS } from './index';

const useHover = () => {
    const ref = useRef(null);

    const sendData = (data) => {
        const metaData = {
            metaData: {
                'time': new Date(),
                'locationData': window.location
            },
            userData: { ...data }
        }
        return JSON.stringify(metaData)
    }

    const enter = () => {
        MICROLYTICS_HOVER_EVENTS.push({
            event: 'Hover Enter',
            payload: JSON.parse(ref.current.getAttribute('microlytics'))
        })
    };
    const leave = () => {
        MICROLYTICS_HOVER_EVENTS.push({
            event: 'Hover Exit',
            payload: JSON.parse(ref.current.getAttribute('microlytics'))
        })
    }

    useEffect(
        () => {
            const node = ref.current;
            if (node) {
                node.addEventListener('mouseover', enter);
                node.addEventListener('mouseout', leave);

                return () => {
                    node.removeEventListener('mouseover', enter);
                    node.removeEventListener('mouseout', leave);
                };
            }
        },
        []
    );

    return [ref, sendData];
};


export default useHover