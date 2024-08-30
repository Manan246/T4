// Build a basic react app with 1 h1 element in italic, blue color with font size 15px, one ordered list of 5 fruits, current time and current date with it

function P1() {
    return (
        <div>
            <h1 style={{ color: "blue", fontSize: "15px", fontStyle: "italic" }}>Hello</h1>
            <ol>
                <li>Apple</li>
                <li>Banana</li>
                <li>Orange</li>
                <li>Mango</li>
                <li>Watermelon</li>
            </ol>
            <p>Current Time: {new Date().toLocaleTimeString()}</p>
            <p>Current Date: {new Date().toLocaleDateString()}</p>

        </div>
    )
}

export default P1