// create a component to perform the task as described below
//  1. add a text field and a submit button 
//      a. while changing the value of the text field, display it below the form
//      b. display this text field value in an alert box upon submitting it
//  2. add a button to perform click and double click event tasks
//      a. on click event display array elements incremented by 2
//      b. on double click event display the power of array elements
//      c. display this values below the button

import React, { useState } from 'react'
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function P14() {
    const [text1, setText] = useState(" ")
    const [arr1, setArr] = useState([])
    const onChangeText = (e) => {
        setText(e.target.value)
    }
    const onSubmit1 = (e) => {
        alert(text1)
    }
    const onClick1 = () => {
        setArr(arr.map((x) => x + 2));
    }
    const onDoubleClick1 = () => {
        setArr(arr.map((x) => x ** 2))
    }
    return (
        <div>
            <h1>Task 1</h1>
            <form onSubmit={onSubmit1}>
                <input type="text" placeholder="Enter your name" id='textbox1' onChange={onChangeText}></input><br></br><br></br>
                <input type='submit'></input>
            </form>
            <br></br>
            <h2 id="p1">{text1}</h2>

            <h1>Task 2</h1><br></br>
            <h2>{arr.join(',')}</h2>
            <button onClick={onClick1} onDoubleClick={onDoubleClick1}>Click</button> <br></br><br></br>

            <h2 id="p2">{arr1.join('.')}</h2>

        </div>
    )
}







export default P14