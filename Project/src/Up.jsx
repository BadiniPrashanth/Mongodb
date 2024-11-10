import axios from 'axios';
import "./index.css"
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Up = () => {
const [username,setUsername]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [file,setFile]=useState(null);
const navigate=useNavigate();

const Submit=async (e)=>{
e.preventDefault();
const formData=new FormData()
formData.append("username",username)
formData.append("email",email)
formData.append("password",password)
formData.append("file",file)
 try {
  const response=await axios.post("http://localhost:2000/user/register",formData)
    console.log(response)
    if(response.data.msg==="success"){
      navigate("/Signin")
    }
 } catch (error) {
  console.log(error)
 }


}
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
     <div className='bg-slate-600 w-2/4 h-[calc(100vh-60px)] rounded-lg block items-start py-2 justify-center hello'>
     <div className='text-center'><h1 className='text-4xl mt-5 text-white'>welcome to chat app</h1><hr /></div>
    <div className='flex items-center justify-center py-52 section2'>
    <form action="" onSubmit={Submit}>
        <span className='text-2xl text-white'>Username : </span><input type="text" placeholder='username' className='m-2 p-2 w-80 rounded-xl' name='username' required onChange={(e)=>setUsername(e.target.value)}  /> <br />
        <pre><span className='text-2xl text-white'>Email  : </span><input type="email" placeholder='email' className='m-2 p-2 w-80 rounded-xl' name='email' required onChange={(e)=>setEmail(e.target.value)} /></pre>
        <span className='text-2xl text-white'>Password : </span><input type="password" placeholder='password' className='m-2 p-2 w-80 rounded-xl' name='password' required onChange={(e)=>setPassword(e.target.value)} /> <br />
        <span className='text-xl text-white'>Upload Image : </span><input type="file" className='m-2 p-2 w-40 rounded-3xl' name='file' onChange={(e)=>setFile(e.target.files[0])} /> <br />
        <input type="submit" value="signup" className=' cursor-pointer hover:bg-slate-500 text-center text-white rounded-lg p-2 ml-40 text-2xl mt-8 signup' />
      </form>
    </div>
     </div>
    </div>
  )
}

export default Up
