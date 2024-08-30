import react, { useReducer } from "react";

function reducer(state, action) {
    return state + action
}

function P23() {
    const [state, dispatch] = useReducer(reducer, 20);
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch(3)}>+</button>
        </div>
    )
}

export default P23