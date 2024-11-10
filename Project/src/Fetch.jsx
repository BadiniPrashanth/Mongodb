import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Fetch = () => {
    const [add,setAdd]=useState([]);
  useEffect(()=>{
        const x=fetch('https://fakestoreapi.com/products');
    x.then((response)=>response.json()).then((data)=>setAdd(data))
  },[])
  return (
    <div>
      {
        add.map((item)=>{
            return <div key={item.id}>
                <Link to={`/products/${item.id}`}>
                <img src={item.image} alt="" height={200} width={200} /></Link>
            </div>
        })
      }
    </div>
  )
}

export default Fetch
