import React from 'react'
import useHover from '../hooks/useHover';

function Test1() {
    const [ref, sendData] = useHover();

    return (
        <div microlytics={sendData({ 'key1': 'value1' })} name='test1' ref={ref} >
            TEST1
        </div>
    )
}

export default Test1
