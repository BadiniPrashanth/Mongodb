import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Formm from './Formm';

const Chat = ({socket}) => {
  const [chatinitiated,setChatinitiated]=useState(false)
  const [chats,setChats]=useState([]);
const [receiverId,setReceiverId]=useState()
const userId=window.localStorage.getItem("userid")

useEffect(()=>{
  socket.emit("join",userId)
},[])

useEffect(()=>{
const handleNewMessages=(message)=>{
  if(receiverId===message.sender){
    setChats(state=>[...state,{sender:message.sender,content:message.content}])
  }
}

socket.on("newMessage",handleNewMessages)

return ()=>{
  socket.off("newMessage",handleNewMessages)
}
},[socket,receiverId])

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-cover w-2/4 h-[calc(100vh-60px)] rounded-lg flex hello' >
         <Sidebar
         setChatinitiated={setChatinitiated}
         setChats={setChats}
         
         setReceiverId={setReceiverId}
         />
         
<div className=' w-3/4 bg-white flex flex-col bg-opacity-20 relative'>
  {
  chatinitiated ? <>
   <div className='overflow-y-auto mb-20'>
    {
         chats&&
         chats.map((chat,index)=>(
          <div key={index} className={`flex px-4 ${chat.sender===userId ? "justify-end":"justify-start"}`}>
            <div className={`p-2 my-2 rounded ${chat.sender===userId ? "bg-blue-500 text-white":"bg-white"}`}>
                {chat.content}
            </div>
          </div>
         ))
    }
   </div>
   <Formm receiverId={receiverId} setChats={setChats} chats={chats}/>
  </> :
  <div className='flex justify-center items-center h-full'>
 <h1 className='text-4xl mt-5 text-white '>welcome to chat app</h1>
  </div>
}
</div>

</div>
    </div>
  )
}

export default Chat
