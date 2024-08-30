//

import React, { useState } from "react"
function P17() {
    const [count, setCount] = useState(0)

    function handleCount() {
        setCount(count + 1)

    }
    return (
        <div>
            <p>clicked {count} times</p>
            <button onClick={handleCount}>Click</button>
        </div>
    )
}

export default P17