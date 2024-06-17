import React, { useState, useEffect } from "react";

export default function MyEffect() {

    const [count, setCount] = useState(0);

    // useEffect runs only when a component is mounted, or when a value changes or both
    // useEffect(function,[dependencies])

    // below function will work only when count value changes
    // you can use return statement when the component umounts and perform cleanup
    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count]);

    const handleAdd = () => {
        setCount((c) => c + 1)
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={handleAdd}>Add</button>
        </>
    );
}