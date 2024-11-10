import {React,useEffect,useState} from 'react'
import { Data } from './Data';
import {Link} from "react-router-dom";

const Add = () => {
    const [state,setState]=useState([]);
   useEffect(()=>{
setState(Data)
   },[])
   
  return (
    <div>
      <div className='text-center p-8 bg-orange-500 text-white font-semibold py-2 px-4'>
        Address
      </div>
      <Link>
      <div className='text-center p-8 bg-blue-500 hover:bg-green-600 text-white font-semibold py-2 px-4'>
        + Add new Address
      </div>
      </Link>
      {
        state.map((item,index)=>{
            return (
                <div key={index} className='border border-gray-400 w-80 p-2 m-2'>
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

export default Add
