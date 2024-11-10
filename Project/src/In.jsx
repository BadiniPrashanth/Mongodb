import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const In = () => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const navigate=useNavigate();

const Submit=async(e)=>{
e.preventDefault();
try {
  const response=await axios.post("http://localhost:2000/user/Signin",{email,password})
  console.log(response)
    if(response.data.msg==="success"){
      window.localStorage.setItem("chat-token",response.data.token)
      window.localStorage.setItem("userid",response.data.user._id)
        navigate("/chat")
       }
} catch (error) {
  console.log(error)
}
}
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
     <div className='bg-slate-600 w-2/4 h-[calc(100vh-60px)] rounded-lg  items-start py-2 justify-center hello'>
     <div className='text-center'><h1 className='text-4xl mt-5 text-white'>welcome to chat app</h1><hr /></div>
    <div className='flex items-center justify-center py-52 section2'>
    <form action="" onSubmit={Submit}>
        <pre><span className='text-2xl text-white'>Email  : </span><input type="email" placeholder='email' name='email' className='m-2 p-2 w-80 rounded-xl' onChange={(e)=>setEmail(e.target.value)} /></pre>
        <span className='text-2xl text-white'>Password : </span><input type="password" placeholder='password' name='password' className='m-2 p-2 w-80 rounded-xl' onChange={(e)=>setPassword(e.target.value)} /> <br />
        <input type="submit" value="Login" className=' cursor-pointer hover:bg-slate-500 text-white rounded-lg p-2 ml-40 text-2xl mt-8 login' />
      </form>
    </div>
     </div>
    </div>
  )
}

export default In
