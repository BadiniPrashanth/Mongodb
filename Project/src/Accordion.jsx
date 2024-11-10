import React, { useState } from 'react'

const Accordion = () => {
  const [state,setState]=useState(0);
  const [active,setActive]=useState(false)
  const items=[
    {
      title:"first",
      description:"this is first"
    },
    {
      title:"second",
      description:"this is second"
    },
    {
      title:"third",
      description:"this is third"
    },
    {
      title:"fourth",
      description:"this is fourth"
    }
  ];
  const Click=(index)=>{
    setState(index);
    setActive(!active)
  }
  return (
    <div>
      {
        items.map((item,index)=>(
          <div key={index} className={`${state===index?"":""}`}>
            <h2>{item.title}</h2>
            <button  onClick={()=>Click(index)}>+</button>
            {
              state===index&&active&&(
              <h1 >{item.description}</h1>
            )}
          </div>
        ))
      }
     
    </div>
  )
}

export default Accordion

