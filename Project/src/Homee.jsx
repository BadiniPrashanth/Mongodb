import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Homee = () => {
const navigate=useNavigate();
const Register=()=>{
navigate("/register")
}
const Login=()=>{
  navigate("/Signin")
  }

const navigate1=useNavigate();
  useEffect(()=>{
    const verifyuser=async()=>{
try {
  const response=await axios.get("http://localhost:2000/user/verify",
    {
      headers:{
        'Authorization':`Bearer ${window.localStorage.getItem("chat-token")}`
      }
    }
  )
  if(response.data.msg==="success"){
navigate1("/")
  }
} catch (error) {
  console.log(error)
}
    }
    verifyuser();
  },[])



  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-slate-600 w-2/4 h-[calc(100vh-60px)] rounded-lg items-start py-2 justify-center hello' >
        <div className='text-center'>
          <h1 className='text-4xl mt-5 text-white '>welcome to chat app</h1>
          <hr /> </div>
          <div className='flex items-center justify-center py-80 section1'>
            <button onClick={Register} className='bg-slate-800 text-white p-4 w-40 text-2xl'>Register</button>
            <button onClick={Login} className='bg-slate-800 text-white p-4 w-40 text-2xl'>Login</button>
          </div>
         
      </div>
    </div>
  )
}

export default Homee
