import React from 'react'
import useHover from '../hooks/useHover';

function Test2() {
    const [ref, sendData] = useHover();

    return (
        <div microlytics={sendData({ 'key2': 'value2' })} name='test2' ref={ref}>
            TEST2
        </div>
    )
}

export default Test2
