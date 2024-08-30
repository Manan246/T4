// 
function P13() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const arr2 = arr.filter((num) => {
        if (num == 3) {
            return false
        }
        else {
            return true
        }
    })
    const newarr = arr2.join(',')
    return (
        <div>
            <h1>Array : {newarr}</h1>
        </div>
    )
}

export default P13