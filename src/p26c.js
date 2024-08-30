import react, { createContext, useContext } from "react";
import { Num1, Num2 } from './p26'



function P26C() {
    const num1 = useContext(Num1)
    const num2 = useContext(Num2)
    return (
        <div>
            <h1>Result is : {num1 * num2}</h1>
        </div>
    )
}

export default P26C