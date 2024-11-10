import React, { useEffect, useState } from 'react'

const Table = () => {
    const [show,setShow]=useState("");
    
const hideTable=()=>{
setShow("")
}

const showTable=()=>{
    setShow(true)
    }

    const showPara=()=>{
        setShow(false)
        }

        const hidePara=()=>{
            setShow(true)
            }

    useEffect(()=>{
        setShow(true)
    },[])

  return show ? (
    <div> 
        <table border={2}>
        <tr>
            <th>sl.no</th>
            <th>EmpId</th>
            <th>EmpName</th>
        </tr>
        <tr>
            <td>1</td>
            <td>101</td>
            <td>Akhil</td>
        </tr>
        <tr>
            <td>2</td>
            <td>102</td>
            <td>Prashanth</td>
        </tr>
        <tr>
            <td>3</td>
            <td>103</td>
            <td>sai</td>
        </tr>
      </table> 
      <button onClick={hideTable}>hide table</button>
      <button onClick={showPara}>show para</button>
    </div>
  ) : <div>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
    Praesentium, est autem placeat laboriosam ipsa dolorem debitis. Cumque, nam deleniti? Nam recusandae doloribus quia eos voluptas deleniti et eveniet qui accusantium? </p>
    <button onClick={hidePara}>hide para</button>
     <button onClick={showTable}>show table</button>
  </div>
  
}

export default Table
