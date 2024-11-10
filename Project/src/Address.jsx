import {React,useState,useEffect} from 'react'
import Axiosinstance2 from './Axioinstance2';
import {Link} from "react-router-dom";

const Address = () => {
    const [state,setState]=useState([]);
    let fetchData=()=>{
        let x=Axiosinstance2.get("/database");
        x.then((data)=>{
          console.log(data.data);
            setState(data.data);
        })
    }
    useEffect(()=>{
fetchData();
    },[])
  return (
    <div>
      <div>
        Address
      </div>
      <Link>
      <div>
        + Add new Address
      </div>
      </Link>
      {
        state.map((item,index)=>{
            return (
                <div key={index}>
                    <span>{item.name}</span>
                    <span>{item.landmark}</span>
                    <span>{item.area}</span>

                </div>
            )
        })
      }
    </div>
  )
}

export default Address
