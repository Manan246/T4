import react,{ useContext } from "react";
import {Fname} from './p25parent'

function P25Child(){
    const value = useContext(Fname)
    return(
        <div>
            <h1>My name is {value}</h1>
        </div>
    )
}

export default P25Child