
function Ex1() {
    const arr = [10, 20, 30, 40, 50]
    return (
        <div>
            {
                arr.map((value,index) => {
                    return (
                        <h3>{index},{value}</h3>
                    )
                })
            }
            <h1>Ex1</h1>
        </div>
    )
}

export default Ex1