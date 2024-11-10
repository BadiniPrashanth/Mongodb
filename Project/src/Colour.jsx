import React, { useEffect, useState } from 'react'

const Colour = () => {
    const [color,setColor]=useState("red");
    const changeColor=()=>{
        setColor(color==="red"?"green":"red");
    }
    
  return (
    <div style={{backgroundColor:color,height:"200px",width:"200px"}}>
      
      <button onClick={changeColor}>Click</button>
      
    </div>
  )
}

export default Colour
