function P8() {
    const arr = [1, 2, 3, 4, 5]
    return (
        <div>
            <h1>Array Mapping</h1>
            {
                arr.map((value) => {
                    return <h2>{value}</h2>
                })
            }
        </div>
    )
}
export default P8