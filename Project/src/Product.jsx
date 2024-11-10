import React, { useState,useEffect } from 'react'
import Axiosinstance1 from "./Axiosinstance"

const Product = () => {
    const [product,setProduct]=useState([]);
    let fetchdata=()=>{
        let x=Axiosinstance1.get("/products");
        x.then((data)=>{
          console.log(data)
            setProduct(data.data);
        })
    }


    
    useEffect(()=>{
fetchdata();
    },[])
  return (
    <div>
      {
        product.map((item)=>{
            const Data=product.find((pro)=>pro.id===item.id);
            return (
                <div>
                    <img src={Data.image} />
                    <h1>{Data.price}</h1>
                </div>
            )
        })
       
      }
      
    </div>
  )
}

export default Product
