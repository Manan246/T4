// create react app which contains form with following fields, 1. Email 2. Password 3. Confirm Password.
// Add validation using RegEx valid email id and password(it must contain atleast 8 characters and must contain atleast 1 uppercase,1 lowercase,1 digit).
// Also values of Password and Confirm Password must be same.
// Display Email in alert box

import React, { useState } from 'react';

function P33() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();



        if (!validateEmail(email)) {
            alert("Invalid email")
        }
        else {
            alert("Email : " + email)
        }

        if (!validatePassword(password)) {
            alert("Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, and 1 digit")
        }

        if (password != confirmPassword) {
            alert("Password does not match")
        }

    };

    return (
        <form onSubmit={handleSubmit}>

            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />


            <label>Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <button type="submit">Submit</button>
        </form>
    );
};

export default P33;
