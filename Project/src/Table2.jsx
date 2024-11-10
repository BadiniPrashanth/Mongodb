import React, { useState } from 'react'

const Table2 = () => {
    const [showTable,setShowTable]=useState([]);
    const data=[{
        id:1,
        name:"pra"
    },{
        id:2,
        name:"pras"
    },{
        id:3,
        name:"prash"
    }]
  return (
    <div>
        <table border={2}>
        <tr>
            <th>sl.no</th>
            <th>EmpId</th>
            <th>EmpName</th>
        </tr>
       {
        data.map((item,index)=>(
           <div key={index}>
             <td>{item.id}</td>
             <td>{item.name}</td>
           </div>
        ))
       }
        </table>

    </div>
  )
}

export default Table2
