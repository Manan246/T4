import React,{useState} from 'react';
import axios from 'axios'

function Signup(){
    const [username,setUsername]=useState("")
    const handleSignup=async(e)=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:3002/Signup",{username})
            alert('Welcome '+username)
            setUsername("")
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default Signup