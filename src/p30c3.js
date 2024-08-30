import react, { useContext } from "react";
import { mystyleContext } from "./p30c1";
import { mystringContext } from "./p30c2";

function P30C3() {
    const mystyle = useContext(mystyleContext);
    const mystring = useContext(mystringContext);
    return (
        <div style={mystyle}>
            <h1>{mystring}</h1>
        </div>
    )

}
export default P30C3;