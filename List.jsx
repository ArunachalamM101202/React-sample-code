export default function List() {

    const fruitsList = [
        { id: 1, name: "apple", calories: 200 },
        { id: 2, name: "orange", calories: 250 },
        { id: 3, name: "pineapple", calories: 105 }
    ]
    fruitsList.sort();

    let lowCalorieFruits = fruitsList.filter(fruit => fruit.calories <= 200)

    return (
        <>
            <ol>
                {fruitsList.map(fruit =>
                    <li key={fruit.id}> Name: {fruit.name}<br></br>Calories: {fruit.calories}</li>
                )}
            </ol>
            <h2>Low calories fruits are </h2>
            <ol>
                {lowCalorieFruits.map(fruit =>
                    <li key={fruit.id}> Name: {fruit.name}<br></br>Calories: {fruit.calories}</li>
                )}
            </ol>
        </>
    )
}