// make a js file names ex3.js wwhich contains 2 functions addition and subtraction. pass these functions as component inside another function in the same file and display addition and subtraction on browser

function Addition(a, b) {
    return (
        a + b
    )
}
function Subtraction(a, b) {
    return (
        a - b
    )
}
function Calculator() {
    var a = 4
    var b = 2
    return (
        <div>
            <h1>Sum of {a} and {b} is {Addition(a, b)}</h1>
            <h1>Subtraction of {a} and {b} is {Subtraction(a, b)}</h1>
        </div>
    )
}

export default Calculator
