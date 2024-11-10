import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Todo = () => {
    const [name,setName]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();
    // const [add,setAdd]=useState("");

const Addtodo=(e)=>{
   e.preventDefault();
        // setItem([...item,add])
        // setAdd("");
        // console.log(item)
   axios.post("http://localhost:3002/Add",{name,password}).then(data=>{console.log(data)
navigate("/Homee")
   })
}

  return (
    <div>
      <input type="text" placeholder='type here..' name='name'  onChange={(e)=>setName(e.target.value)} />
      <input type="text" placeholder='type here..' name='password'  onChange={(e)=>setPassword(e.target.value)} />
      <Link to="/Homee"><button onClick={Addtodo}>Add</button></Link>
      
    </div>
  )
}

export default Todo
