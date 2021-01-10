import { useEffect, useRef } from 'react'

const useHover = () => {
    const ref = useRef();
    const _ref = useRef();
    const enter = () => {
        console.log(`Entered: ${ref.current.getAttribute('name')}`)
    };
    const leave = () => {
        console.log(`Exited: ${ref.current.getAttribute('name')}`)
    }

    useEffect(() => {
        if (ref.current) {
            _ref.current = ref.current; // cache external ref value for cleanup use
            ref.current.addEventListener("mouseenter", enter);
            ref.current.addEventListener("mouseleave", leave);
        }

        return () => {
            if (_ref.current) {
                _ref.current.removeEventLisener("mouseenter", enter);
                _ref.current.removeEventLisener("mouseleave", leave);
            }
        };
    }, []);

    return [ref];
};


export default useHover