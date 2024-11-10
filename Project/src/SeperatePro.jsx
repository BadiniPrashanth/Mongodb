import React from 'react'
import Products from './Products';
import { useParams } from 'react-router-dom'

const SeperatePro = () => {
    const {id}=useParams();
    const product={
       1: {
            id:"1",
            name:"prashanth"
        },
       2: {
            id:"2",
            name:"prash"
        },
       3: {
            id:"3",
            name:"prasha"
        },
       4: {
            id:"4",
            name:"pra"
        }
    }[id];
    
    
  return (
    <div>
     <h1>{product.name}</h1>
    </div>
  )
}

export default SeperatePro
