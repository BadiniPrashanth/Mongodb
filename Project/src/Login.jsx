import React, { useState } from 'react'

const Login = () => {
    const [add,setAdd]=useState([]);
    const [state,setState]=useState("");
    const [edit,setEdit]=useState([]);
   const added=(e)=>{
    e.preventDefault();
    const todos={text:state};
    setAdd([...add,todos])
    setState("");
   }
   const Delete=(id)=>{
    setAdd(add.filter((_,item)=>item !== id));
   }
   const Edit=(index)=>{
    setState(add[index].text);
    setEdit(index);
   }
  return (
    <div>
      <input type="text" placeholder='username' value={state} onChange={(e)=>setState(e.target.value)}  />
      <button onClick={added}>Add</button>
      {add.map((item,index)=>{
        return (
        <div key={index} style={{display:'flex'}}>
            <li>{item.text}</li><button onClick={()=>Edit(index)}>Edit</button><button onClick={()=>Delete(index)}>Delete</button>
        </div>
        )
      })}
    </div>
  )
}

export default Login
