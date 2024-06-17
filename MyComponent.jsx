import React, { useState } from 'react';

export default function MyComponent() {

    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    });

    function handleYear(e) {
        setCar({ ...car, year: e.target.value })
    }

    function handleMake(e) {
        setCar({ ...car, make: e.target.value })
    }

    function handleModel(e) {
        setCar({ ...car, model: e.target.value })
    }

    return (
        <>
            <h1>Your Favourite Car is: {car.year} {car.make} {car.model}</h1>
            <input type="number" value={car.year} onChange={handleYear} /><br></br>
            <input type="text" value={car.make} onChange={handleMake} /><br></br>
            <input type="text" value={car.model} onChange={handleModel} /><br></br>
        </>
    );
}