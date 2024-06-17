import React, { useState } from 'react';

export default function StateArray() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById("newFood").value;
        document.getElementById("newFood").value = "";


        setFoods(() => [...foods, newFood]);
    }

    function handleDeleteFood(index) {
        setFoods(foods.filter((food, new_index) => new_index !== index))
    }

    return (
        <>
            <h2>List of food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleDeleteFood(index)}>{food}</li>)}
            </ul>
            <br></br>
            <input type="name" placeholder='Enter food name' id="newFood" />
            <button onClick={handleAddFood}>Add Food</button>
        </>
    );
}