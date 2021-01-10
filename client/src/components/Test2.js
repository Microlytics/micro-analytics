import React from 'react'
import useHover from '../utils/useHover';

function Test2() {
    const [ref] = useHover();
    return (
        <div name='test2' ref={ref}>
            TEST2
        </div>
    )
}

export default Test2
