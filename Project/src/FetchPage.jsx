import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FetchPage = () => {
    const {id}=useParams();
    const [state,setState]=useState([]);
    useEffect(()=>{
        const x=fetch(`https://fakestoreapi.com/products/${id}`);
        x.then((response)=>response.json()).then((data)=>setState(data))
    },[id])
  return (
    <div>
        <img src={state.image} alt="" />
    </div>
  )
}

export default FetchPage
