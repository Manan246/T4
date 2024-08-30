// react app having a button which changes image by clicking it using useState only
import React, { useState } from "react"
import a from './2.jpeg'
import b from './3.jpg'
function P20() {
    const [src, setSrc] = useState(a)

    function changePhoto() {
        var value = src
        if (value == a) {
            setSrc(b)
        }
        else {
            setSrc(a)
        }
    }
    return (
        <div>
            <img src={src} style={{ width: '400px', height: '200px' }}></img> <br></br>
            <button onClick={changePhoto}>Change Photo</button>
        </div>
    )
}

export default P20