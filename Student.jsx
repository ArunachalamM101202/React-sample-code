export default function Student(props) {

    return (
        <>
            <div>
                <p>Name: {props.name}</p>
                <p>Age: {props.age >= 18 ? "Can Vote" : "Cannot Vote"}</p>
            </div>
        </>
    );
}

Student.defaultProps = {
    name: "Arun",
    age: 20
}