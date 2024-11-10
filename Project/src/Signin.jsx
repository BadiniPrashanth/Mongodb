import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email,setEmail]=useState([]);
    const [pass,setPass]=useState([]);
    const navigate=useNavigate()

    const Submit=(e)=>{
        e.preventDefault();
          axios.post("http://localhost:3002/Signin",{email,pass}).then((result)=>{console.log(result)
            if(result.data==="success"){
            navigate("/Homee") }else{
                alert("pass is incorrect")
            }
          })
          .catch(err=>console.log(err))
      }
  return (
    <div>
     <form action="Signin" method='post' onSubmit={Submit}>
     <input type="email" placeholder='email' name='email' onChange={(e)=>setEmail(e.target.value)} /><br />
      <input type="password" placeholder='password' name='password' onChange={(e)=>setPass(e.target.value)} /><br />
      <button>Signin</button>
      
     </form>
    </div>
  )
}

export default Signin
