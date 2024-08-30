// create react app to perform the following tasks using function component as 
// 1. Create one main file F1.js and other 2 components file f2.js and f3.js
// 2. Main file contains form with the following fields : fname,lname,msg,city and gender
// 3. Pass values of all the fields from f1.js to f3.js file through f2.js and display all submitted values in alert box using useContext and useState hook

import React, { useState, useContext, createContext } from 'react';
import P34B from './p34b.js'

const Formdatanew = createContext()

function P34A() {
    const [formdata, setFormData] = useState({})
    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setFormData({ ...formdata, [name]: value })
        console.log(formdata)

    }
    function handleSubmit(e) {
        e.preventDefault()
        return (
            <Formdatanew.Provider value={formdata}>
                <P34B />
            </Formdatanew.Provider>
        )
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label>First Name : </label>
                <input type="text" name="firstname" placeholder="Enter First Name" onChange={handleChange} /><br></br><br></br>
                <label>Last Name : </label>
                <input type="text" name="lastname" placeholder="Enter Last Name" onChange={handleChange} /><br></br><br></br>
                <label>Message : </label>
                <textarea name="message" placeholder="Enter Message" onChange={handleChange}></textarea><br></br><br></br>
                <label>Gender : </label>
                <input type="radio" name="gender" value="male" onChange={handleChange} />Male
                <input type="radio" name="gender" value="female" onChange={handleChange} />Female<br></br><br></br>
                <label>City : </label>
                <select name="city" onChange={handleChange}>
                    <option value="select" selected>--Select--</option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="chennai">Chennai</option>
                    <option value="kolkata">Kolkata</option>

                </select><br></br><br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export { Formdatanew }
export default P34A