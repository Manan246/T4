// Write a react js program to perform the task as asked below:
// 1) Create 1 main file(parent file) named COMP.js and the other three component files comp1,comp2,comp3.js
// 2) Pass number 1 and number 2 from COMP.js file to comp3.js and calculate multiplication of the numbers and display result using useContext

import React, { createContext } from "react"
import P26A from "./p26a"
const Num1 = createContext("");
const Num2 = createContext("");
function P26() {
    return (
        <>
            <Num1.Provider value="20">

                <Num2.Provider value="5">
                    <P26A />
                </Num2.Provider>
            </Num1.Provider>
        </>
    )
}
export default P26
export { Num1, Num2 }