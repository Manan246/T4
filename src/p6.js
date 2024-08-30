function P6() {
    const myStyle = { color: 'white', backgroundColor: 'pink', padding: '10px 20px', margin: '200px' }
    return (
        <div>
            <center>
                <button style={myStyle} onDoubleClick={handleClick}>Click Here</button>
            </center>
        </div>
    )
}

const handleClick = () => {
    alert("Welcome to LJU")
}

export default P6