import React, { useState } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const Signups = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [pass,setPass]=useState();
    const navigate=useNavigate();
const Submit=(e)=>{
  e.preventDefault();
    axios.post("http://localhost:3002/Register",{name,email,pass})
    .then(result=>{console.log(result)
        navigate("/Signin")
    })
    .catch(err=>console.log(err)
    )
  
}

  return (
    <div>
     <form >
     <input type="text" placeholder='username' name='name' onChange={(e)=>setName(e.target.value)} /><br />
      <input type="email" placeholder='email' name='email' onChange={(e)=>setEmail(e.target.value)}/><br />
      <input type="password" placeholder='password' name='pass' onChange={(e)=>setPass(e.target.value)}/><br />
      <Link to="/Signin">
      <button onClick={Submit}>Register</button>
      </Link>
     </form>
     
      
    </div>
  )
}

export default Signups
