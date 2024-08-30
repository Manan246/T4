import React, { useState, useContext, createContext } from 'react';

import { Formdatanew } from './p34a.js'

function P34C() {
    const formdata = useContext(Formdatanew)

    return (
        <div>
            <h1>Context API</h1>
            {/* <p>Form Data: {formdata.name}</p> */}
        </div>
        // alert("Form Data : First Name : " + formdata.firstname + " Last Name : " + formdata.lastname + " Message : " + formdata.message + " Gender : " + formdata.gender + " City : " + formdata.city)
    )
}


export default P34C