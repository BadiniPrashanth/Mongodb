import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Up from './Up'
import In from './In'
import Homee from './Homee'
import Chat from './Chat'
import io from "socket.io-client"

const socket=io.connect("http://localhost:2000")

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat socket={socket}/>}/>
        <Route path="/register" element={<Up/>}/>
        <Route path="/Signin" element={<In/>}/>
        <Route path="/" element={<Homee/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

