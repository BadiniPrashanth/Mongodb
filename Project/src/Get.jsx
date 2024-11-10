import React, { useEffect, useState } from 'react'

const Get = () => {
    const [items,setItems]=useState([]);
    useEffect(()=>{
       const fetchData=async()=>{
        const x= await fetch("http://localhost:3000")
        const data=await x.json()
        setItems(data.items)
       }
       fetchData();
    },[])
  return (
    <div>
      {
        items.map((item)=>{
            return <div>
               <h1>name: {item.name}</h1>
               <h2>style: {item.style}</h2>
            </div>
        })
      }
    </div>
  )
}

export default Get
