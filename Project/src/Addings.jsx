import React, { useState } from 'react'

const Addings = () => {
    const [name,setName]=useState([]);
    const [pass,setPass]=useState([]);
    const [add,setAdd]=useState("");
    const [sub,setSub]=useState("");

const Submit=()=>{
    setName([...name,add]);
    setPass([...pass,sub]);
    setAdd("");
    setSub("");
}

  return (
    <div>
      <input type="text" placeholder='username'value={add} onChange={(e)=>setAdd(e.target.value)} /><br />
      <input type="text" placeholder='password' value={sub} onChange={(e)=>setSub(e.target.value)} /><br />
      <button onClick={Submit}>Add</button>
      {
        name.map((item,index)=>(
            <div key={index}>
                <h1>Username : {item}</h1>
            </div>
        ))
      }
       {
        pass.map((item,index)=>(
            <div key={index}>
                <h1>Password : {item}</h1>
            </div>
        ))
      }
    </div>
  )
}

export default Addings
