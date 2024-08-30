// write a program to build react app having 2 input fields and display the entered value on the same page
import React, { useState } from "react"

function P21() {
    const [text1, setText1] = useState(" ")
    const [text2, setText2] = useState(" ")


    function changeText1(e) {
        setText1(e.target.value)
    }
    function changeText2(e) {
        setText2(e.target.value)
    }
    return (
        <div>
            <input type="text" onChange={changeText1}></input>
            <p>{text1}</p><br></br>
            <input type="text" onChange={changeText2}></input>
            <p>{text2}</p><br></br>

        </div>
    )
}

export default P21