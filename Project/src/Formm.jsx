import axios from 'axios';
import React, { useState } from 'react'

const Formm = ({receiverId,setChats,chats}) => {
    const [message,setMessage]=useState("");
    const userId=window.localStorage.getItem("userid")

const sendMessage=async(e)=>{
e.preventDefault();
try {
  const response=await axios.post("http://localhost:2000/message/send/"+receiverId,
    {content:message},{
      headers:{
        'Authorization':`Bearer ${window.localStorage.getItem("chat-token")}`
      }
    }
  )
  console.log(response)
  setChats([...chats,{content:message,sender:userId}])
} catch (error) {

  console.log(error)
}
}

  return (
    <div className='p-4  absolute bottom-0 right-0 left-0 bg-white bg-opacity-10'>
      <form onSubmit={sendMessage} className='flex items-center'>
      <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='type your message....' className='w-full p-2 border rounded-l-lg' />
      <button className='p-2 bg-blue-500 text-white rounded-r-lg'>Send</button>
      </form>
    </div>
  )
}

export default Formm
