import axios from 'axios'
import React, { useEffect, useState } from 'react'

const baseURL = 'https://official-joke-api.appspot.com/random_joke'

function P36() {
    const [post, setPost] = useState("")
    function handleClick() {
        axios.get(baseURL).then((response) => {
            setPost(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <h1>{post.setup}</h1>
            <h2>{post.punchline}</h2>
        </div>
    )
}

export default P36