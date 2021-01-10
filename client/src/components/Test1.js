import React from 'react'
import useHover from '../utils/useHover';

function Test1() {
    const [ref] = useHover();

    return (
        <div name='test1' ref={ref}>
            TEST1
        </div>
    )
}

export default Test1
