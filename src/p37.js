// build a survey form with radio buttons and dropdowns. Display selected results on the alert box on user response using react JS Hooks

import React, { useEffect, useState } from 'react'
import axios from "axios"

const baseURL = 'http://localhost:3000/'
function P37() {
    const [post, setPost] = useState("")
    function handleSubmit() {
        axios.get(baseURL).then((response) => {
            setPost(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>
                <label>Select Your Fav Programming Language : </label>
                <select name="proglang">
                    <option value="Java">Java</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                </select> <br></br><br></br>
                <label>Select Your Experience Level : </label>
                <input type="radio" name="exp" value="Beginner" />Beginner
                <input type="radio" name="exp" value="Advanced" />Advanced
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default P37