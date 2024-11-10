import React, { useEffect, useState } from 'react'
import Address from './Address'
import Axiosinstance1 from "./Axiosinstance"
import {Link} from "react-router-dom"
const Fetchitems = () => {
    let[State,setState]=useState([]);
    let fetchdata=()=>{
        let x=Axiosinstance1.get("/products");
        x.then((data)=>{
          console.log(data)
            setState(data.data);
        })
    }
    useEffect(()=>{
fetchdata();
    },[])
  return (
   <>
    <div className='flex flex-wrap gap-[50px] ml-10 mt-4 rounded-full'>
      {
        State.map(({id,title,price,description,image})=>{
         return (
           <>
            <div className='flex flex-col items-center justify-evenly rounded-2xl border-4 border-orange-400 w-[450px] h-[600px] text-center bg-gray-400'>
                <Link to={`/product/${id}`}>
                <img src={image} alt="" className='h-[250px] w-[250px] mix-blend-color-burn'/></Link>
                <h2 className='font-semibold'>{title}</h2>
                <p className='text-xs'>{description}</p>
                <p className='font-extrabold'>${price}</p>
               <Link to="/Add"> <button data-aos="zoom-in" className='border-4 p-1 w-[200px] rounded bg-orange-400'>BUY NOW</button></Link>
            </div>
            </>
         )
        })
      }
    </div></>
  )
}

export default Fetchitems
