import React, { useEffect, useState } from 'react'
const Question = () => {
  const [ques,setQues]=useState("");
    const task=[{
      title:"j1",
       task1:"hello"
    },{
      title:"j2",
      task2:"hi"
    }]


  return   (
    <div>
      {
       task.map((item,index)=>{
        return <div key={index}>
          <h1 onClick={()=>setQues(index)}>{item.title}</h1>
          {
            ques===index&&(
             <div>
               <p>{item.task1}</p>
               <p>{item.task2}</p>
             </div>
            )
          }
        </div>
       }) 
      }
    </div>
    
    
  )
}

export default Question
