import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)

    const addOne = () => {
        setCounter(counter + 1)
    }

    const subtractOne = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(0)
    }

    return (
        <div style={{ border: "1px solid black", display: 'flex', width: '500px', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <button onClick={addOne} style={{ width: '75px', fontSize: '50px' }}>+</button>
            <h1>{counter}</h1>
            <button onClick={subtractOne} style={{ width: '75px', fontSize: '50px' }} >-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter