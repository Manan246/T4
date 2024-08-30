import react, { useReducer } from "react";

function reducer(state, action) {
    if (action.type == 'increment') {
        return state + 1;
    }
    if (action.type == 'decrement') {
        return state - 1;
    }
}

function P24() {
    const [state, dispatch] = useReducer(reducer, 20);
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
        </div>
    )
}

export default P24