import React, { useState } from 'react'

const Adding = () => {
    let [add,setAdd]=useState(0);
    const added=()=>{
        setAdd(++add)
    
    }
    const sub=()=>{
          if(add>0){
            setAdd(--add)
          }
    }
  return (
    <div>
      <button onClick={sub}>-</button>
      <span>{add}</span>
      <button onClick={added}>+</button>
    </div>
  )
}

export default Adding
