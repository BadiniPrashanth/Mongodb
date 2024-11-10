import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const User = () => {

const [data,setData]=useState({
    username:'',
    password:''
});
const [add,setAdd]=useState({
    submitusername:"",
    submitpassword:""
})
const {username,password}=data;
const change=(e)=>{
    setData({...data,[e.target.name]:[e.target.value]})

}

const submit=()=>{
    setAdd({
        submitusername:username,
        submitpassword:password
    })
}

  return (
    <div>
      <input type="text" placeholder='username' name='username' value={username} onChange={change}/><br /><br />
      <input type="password" placeholder='password' name='password' value={password} onChange={change} /><br /><br />
      <button onClick={submit} >submit</button>
      <div>
       {
        <div>
            <h2>submittedusername : {add.submitusername}</h2>
            <h2>submittedpassword : {add.submitpassword}</h2>
        </div>
       }
      </div>
    </div>
  )
}

export default User
