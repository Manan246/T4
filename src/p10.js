// write a program to create react js app having an array of string and convert it in uppercase using map method and display the array

function P10() {
    const strings = ['manan', 'baldania', 'hello', 'good']

    return (
        <div>
            <h1>Array of strings</h1>
            {
                strings.map((item) => {
                    return <h1>{item.toUpperCase()}</h1>
                })
            }

        </div>
    )
}

export default P10