import { useEffect, useState } from "react";

function P27() {
    const [count, setCount] = useState(0)
    const [cal, setCal] = useState(0)
    useEffect(() => {
        alert('clicked')
    }, [count])

    function changeCount() {
        setCount(count + 1)
    }

    function changeCal() {
        setCal(cal + 1)
    }

    return (
        <div>
            <button onClick={changeCount}>ButtonA{count}</button>
            <button onClick={changeCal}>ButtonB{cal}</button>
        </div>
    )
}

export default P27
