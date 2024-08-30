// create react app with 3 components, parent and 2 child components, C1 and C2 , use context hook to pass 2 colours from parent component to the child component C2(Yellow colour as on color and blue colour as bgcolor.)
// --> in child component C1 import child component C2.
// --> in C2 display FULL STACK DEVELOPMENT text in H1 heading with above mentioned bgcolor and fontcolor using context 

import react, { createContext, useContext } from "react";
import P31C1 from './p31c1'
import P31C2 from './p31c2'

const colors1=createContext(["Yellow","Blue"])
function P31() {
    return (

    )
}