import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = ({setChatinitiated,setChats,setReceiverId}) => {
    const [users,setUsers]=useState([]);
    const navigate=useNavigate();

const handleLogout=()=>{
  window.localStorage.removeItem("chat-token")
  window.localStorage.removeItem("userid")
  navigate("/")
}

    useEffect(()=>{
const fetchUsers=async()=>{
    try {
        const users=await axios.get("http://localhost:2000/users",
            {
                headers:{
                  'Authorization':`Bearer ${window.localStorage.getItem("chat-token")}`
                }
              }
        );
        setUsers(users.data.users)
    } catch (error) {
        navigate("/")
        console.log(error)
    }
}
fetchUsers();
    },[])

const startchat=async(id)=>{
try {
  const response=await axios.get("http://localhost:2000/message/read/" + id,
   {
      headers:{
        'Authorization':`Bearer ${window.localStorage.getItem("chat-token")}`
      }
    }
  )
  setChats(response.data)
} catch (error) {
  if(error.response.data.msg==="not found"){
    setChats([]);
  }
  console.log(error)
}



setChatinitiated(true)
setReceiverId(id)

}

  return (
    <div className='w-1/4 bg-black p-4 bg-opacity-70 relative'>
      <input type="text" placeholder='Search' className='w-full p-2 mb-4 border rounded' />
      {
        users.length>0 ? (
             <div  className='space-y-4'>
                {
                    users.map((user)=>(
                        <div key={user._id} onClick={()=>startchat(user._id)} className='flex items-center space-x-4 p-2 hover:bg-gray-300 cursor-pointer sidebar'>
                            <img src={`http://localhost:2000/files/${user.file}`} alt="user image" className='w-10 h-10 rounded-full border' />
                            <span className='text-white text-sm font-bold username'>{user.username}</span>
                        </div>
                    ))
                }
             </div>
        ):(
        
         <h3 className='text-white font-bold'>no users found</h3>
        
      )}
      <button onClick={handleLogout} className='absolute h-10 bottom-1 right-1 left-1 rounded hover:bg-blue-700 bg-blue-500  text-white'>Logout</button>
    </div>
  )
}

export default Sidebar
