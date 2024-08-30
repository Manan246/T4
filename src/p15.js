// Create a react app to perform the tasks as asked below
//  1. An array of 5 objects with properties name and age 
//  2. Check if age is greater than 50 then display the person name

const arr = [
    { name: 'Manan', age: 19 },
    { name: 'Tithi', age: 53 },
    { name: 'Riya', age: 50 },
    { name: 'Divya', age: 47 },
    { name: 'Gati', age: 25 }
]
function P15() {
    return (
        <div>
            <h1>Person with age greater than 50</h1>
            {
                arr.filter((value) => (value.age <= 50)).map((value) => { return (<h1>value :{value.name} {value.age}</h1>) })
            }

        </div>
    )
}

export default P15