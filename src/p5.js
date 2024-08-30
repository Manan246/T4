function P5() {
    const myStyle = { color: 'white', backgroundColor: 'pink', padding: '10px 20px', margin: '200px' }
    return (
        <div>
            <center>
                <button style={myStyle} onClick={handleClick}>Click Here</button>
            </center>
        </div>
    )
}

const handleClick = () => {
    alert("Welcome to LJU")
}

export default P5