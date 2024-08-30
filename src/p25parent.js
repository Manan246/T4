import react,{ createContext } from "react";
import P25Child from './p25child'

const Fname=createContext("ABC")
function P25Parent(){
    return(
        <Fname.Provider value="XYZ">
            <P25Child/>
        </Fname.Provider>
    )
}

export {Fname}
export default P25Parent