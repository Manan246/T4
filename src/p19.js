// write a program to build react app to perform the task as asked below:
// 1. Add 3 buttons: 'changeText','changeColor','Hide/Show',
// 2. Add heading LJ uni in red color and also add 'React JS Hooks' text in h2 tag.
// 3. By clicking on changeText button , text should be changed to 'Welcome Students' and vice versa
// 4. By clicking on chamgeColor button , color of text to blue and vice versa. This color change should be performed by double clicking the button
// 5. Initially Button text should be hide. While clicking on it the button text should be changed to Show and text React Js Hooks will not be shown.

// create react app having buttons to increment and decrement the button by clicking the respective button, also increment of the number should be performed only if the number is less than 10 and decrement of the number should be performed if number is greater than 0

import React, { useState } from "react"
function P19() {
    const [text, setText] = useState("LJ University")
    const [color, setColor] = useState("red")
    const [hs, setHS] = useState("Hide")
    const [hsText, setHSText] = useState("React JS Hooks")

    function changeText() {
        var value = text
        if (text == "LJ University") {
            setText("Welcome Students")
        }
        else {
            setText("LJ University")
        }
    }
    function changeColor() {
        var value = color
        if (value == 'red') {
            setColor("blue")
        }
        else {
            setColor("red")
        }

    }
    function hideShow() {
        var value = hs
        if (value == 'Hide') {
            setHSText(" ")
            setHS("Show")
        }
        else {
            setHSText("React JS Hooks")
            setHS("Hide")
        }
    }
    return (
        <div>
            <h2 style={{ color: color }}>{text}</h2><br></br>
            <h2 >{hsText}</h2>
            <button onClick={changeText}>Change Text</button>
            <button onDoubleClick={changeColor}>Change Color</button>
            <button onClick={hideShow}>{hs}</button>
        </div>
    )
}

export default P19