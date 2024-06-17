import { useState } from "react";

export default function ColorPicker() {

    const [color, setColor] = useState("#ff0000")

    function handleColorChange(e) {
        setColor(e.target.value);
    }

    return (
        <>
            <h1>Color Picker</h1>
            <input type="color" value={color} onChange={handleColorChange}></input>
            <h3>Selected Color is {color}</h3>
        </>
    );
}