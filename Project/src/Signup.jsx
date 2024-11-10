import React, { useState } from 'react'

const Signup = () => {
    const [signup,setSignup]=useState("signup");
  return (
    <div>
      {
        signup==="signup" ? <div><input type="text" placeholder='username' /><br /><br /></div> : ""
      }
      <input type="email" placeholder='email' /><br /><br />
      <input type="password" placeholder='password'/><br /><br />
     
        {
            signup==="signup" ? <button>signup</button>: <button>Login</button>
        }
      
    </div>
  )
}

export default Signup
