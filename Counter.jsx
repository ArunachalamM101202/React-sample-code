import React, { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    const decrementCounter = () => {
        setCounter(counter - 1);
    }

    const resetCounter = () => {
        setCounter(0);
    }

    return (
        <>
            <h2>Your current Score: {counter}</h2>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
            <button onClick={resetCounter}>Reset</button>
        </>
    );
}