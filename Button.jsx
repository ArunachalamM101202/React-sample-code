
export default function Button() {

    const handleClick = (e) => {
        if (e.target.textContent === "ow!")
            e.target.textContent = "Click Me";
        else
            e.target.textContent = "ow!";
    }

    return (
        <>
            <button onClick={(e) => handleClick(e)}>Click me</button>
        </>
    )
}