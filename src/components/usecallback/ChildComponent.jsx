import React from 'react'

function ChildComponent({ count, handleCount }) {
    console.log('Child component re-rendered');
    return (
        <div>
            <p>Count: {count}</p>
            <button className='btn btn-info m-5' onClick={handleCount}>Increase count</button>
        </div>
    );
}

export default ChildComponent