import react, { createContext, useContext } from "react";
import P30C3 from './p30c3'

const mystring = "Hello Good Mornin"

const mystringContext = createContext(mystring)
function P30C2() {
    return (
        <mystringContext.Provider value={mystring}>
            <P30C3 />
        </mystringContext.Provider>
    )
}

export { mystringContext }
export default P30C2
