// Write a react code to print cars brand name and its model name which are passed as props using json

// data

// code
function P4(props) {
    return (
        <div>
            <h1>{props.c.brand}</h1>
            <h2>{props.c.model}</h2>
        </div>
    )
}

export default P4
