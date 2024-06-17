import React, { useState } from "react";

export default function ToDoList() {
    const [todolist, setTodolist] = useState([]);
    const [newItem, setNewItem] = useState("");

    const handleNewItem = (e) => {
        setNewItem(e.target.value);
    }

    const handleAddItem = () => {
        setTodolist(() => [...todolist, newItem]);
        document.getElementById("itemInput").value = "";
    }

    const handleDeleteItem = (index) => {
        setTodolist(todolist.filter((item, newIndex) => newIndex !== index))
    }

    const handleMoveUpItem = (index) => {

        if (index > 0) {
            const newList = [...todolist];
            [newList[index], newList[index - 1]] = [newList[index - 1], newList[index]];
            setTodolist(newList)
        }

    }
    return (
        <>
            <h1>My ToDoList</h1>

            <ol>
                {todolist.map((element, index) =>
                    <li key={index}>{element}
                        <button onClick={() => handleDeleteItem(index)}>Delete</button>
                        <button onClick={() => handleMoveUpItem(index)}>Move Up</button>
                    </li>
                )}
            </ol>

            Enter ToDoList Item &nbsp;<input type="text" id="itemInput" onChange={handleNewItem}></input><br></br>
            <button onClick={handleAddItem}>Add Item</button>

        </>
    );
}