// We have an array of numbers and we want to multiply these numbers by 5.Write react js script to display these multipled numbers using map function
function P9() {
    const arr = [1, 2, 3, 4, 5]
    return (
        <div>
            <h1>Array Mapping</h1>
            {
                arr.map((value) => {
                    return <h2>{value * 5}</h2>
                })
            }
        </div>
    )
}
export default P9