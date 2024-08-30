// use multiple Context in react app as:
// 1)  Create a context for css styling and prvide to comp1
// 2) Create a context for string value students and provide it to comp 2
// 3) Consumes both the context and displayes the message with the provided styles and strings
import react, { createContext } from "react";
import P30C2 from './p30c2'

const mystyle = {
    color: "green",
    backgroundColor: "darkblue"
}

const mystyleContext = createContext(mystyle)
function P30C1() {
    return (
        <mystyleContext.Provider value={mystyle}>
            <P30C2 />
        </mystyleContext.Provider>
    )
}

export { mystyleContext }
export default P30C1