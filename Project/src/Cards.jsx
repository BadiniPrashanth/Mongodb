import React, { useEffect } from 'react'
import Axiosinstance1 from './Axiosinstance'

const Cards = () => {
    let fetchdata=()=>{
        let x=Axiosinstance1.get("/products");
        console.log(x);
    }
    useEffect(()=>{
fetchdata();
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Cards
