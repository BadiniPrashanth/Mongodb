import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const product=[
        {
            id:"1",
            name:"prashanth"
        },
        {
            id:"2",
            name:"prash"
        },
        {
            id:"3",
            name:"prasha"
        },
        {
            id:"4",
            name:"pra"
        }
    ]
  return (
    <div>
      {
        product.map((item)=>{
        return  <div>
            <Link to={`/Sep/${item.id}`}>
            <h1>{item.id}</h1></Link>
          </div>
        })
      }
    </div>
  )
}

export default Products
