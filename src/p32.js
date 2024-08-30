//  Create react app which contains form with following fields: firstname,lastname,email,password,confirm password,message,gender,city(dropdown).Display submitted values using useState hook in alert box

import { useState } from "react"



function P32() {
    const [formdata, setFormData] = useState({})
    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setFormData({ ...formdata, [name]: value })
    }
    function handleSubmit(e) {
        e.preventDefault()
        alert("Form Data : First Name : " + formdata.firstname + " Last Name : " + formdata.lastname + " Email : " + formdata.email + " Password : " + formdata.password + " Confirm Password : " + formdata.confirmpassword + " Message : " + formdata.message + " Gender : " + formdata.gender + " City : " + formdata.city)
    }
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name : </label>
                <input type="text" name="firstname" placeholder="Enter First Name" onChange={handleChange} /><br></br><br></br>
                <label>Last Name : </label>
                <input type="text" name="lastname" placeholder="Enter Last Name" onChange={handleChange} /><br></br><br></br>
                <label>Email : </label>
                <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} /><br></br><br></br>
                <label>Password : </label>
                <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} /><br></br><br></br>
                <label>Confirm Password : </label>
                <input type="password" name="confirmpassword" placeholder="Enter Confirm Password" onChange={handleChange} /><br></br><br></br>
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

export default P32