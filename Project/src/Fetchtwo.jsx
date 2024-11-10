import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Fetchtwo = () => {
    const [add,setAdd]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
      const x=fetch(`https://fakestoreapi.com/products/${id}`);
      x.then((res)=>res.json()).then((data)=>setAdd(data))
    },[id])
  return (
    <div>
      
        <img src={add.image} alt="" />
      
    </div>
  )
}

export default Fetchtwo
