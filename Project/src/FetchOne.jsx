import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const FetchOne = () => {
    const [add,setAdd]=useState([]);
useEffect(()=>{
  const x=fetch("https://fakestoreapi.com/products");
  x.then((res)=>res.json()).then((data)=>setAdd(data))
},[])
  return (
    <div>
      {
        add.map((item,index)=>{
            return <div key={index}>
               <Link to={`/products/${item.id}`} >
               <img src={item.image} alt="" />
               </Link>
            </div>
        })
      }
    </div>
  )
}

export default FetchOne
