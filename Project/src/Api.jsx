import React, { useEffect, useState } from 'react'

const Api = () => {
    const [datas,setDatas]=useState([]);
    useEffect(()=>{
        const x=fetch('https://fakestoreapi.com/products');
        x.then(res=>res.json())
        .then((data)=>
            
            setDatas(data))
            

    },[])
  return (
    <div>
      {datas.map((item,index)=>{
        return (
        <div key={index}>
           <h1>{item.price}</h1>
        </div>
        )
      })}
    </div>
  )
}

export default Api
