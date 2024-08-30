function P7() {
    
    return (
        <div>
            <center>
                <input type="text" onChange={handleChange}></input>
            </center>
        </div>
    )
}

const handleChange = (e) => {
    console.log(e.target.value)
}

export default P7