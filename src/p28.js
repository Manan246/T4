// Write a react js script to create a digital clock running continously using useEffect.
import React, { useEffect, useState } from "react";

function P28() {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])
    return (
        <div>
            <h1>Hour:{date.getHours()} Minute:{date.getMinutes()} Seconds:{date.getSeconds()}</h1>
        </div>
    )
}

export default P28