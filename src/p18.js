// create react app having buttons to increment and decrement the button by clicking the respective button, also increment of the number should be performed only if the number is less than 10 and decrement of the number should be performed if number is greater than 0

import React, { useState } from "react"
function P18() {
    const [num, setCount] = useState(0)

    function increment() {
        if (num < 10) {
            setCount(num + 1)
        }
    }
    function decrement() {
        if (num > 0) {
            setCount(num - 1)
        }
    }
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default P18