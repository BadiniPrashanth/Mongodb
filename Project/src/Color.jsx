import React from 'react'
import { useState } from 'react'

const Color = () => {
    const [change,setChange]=useState(0);

const changing=()=>{
    console.log(change++)
}

  return (
    <div>
      <button onClick={changing}>Change</button>
      <div>
        {change}
      </div>
    </div>
  )
}

export default Color
