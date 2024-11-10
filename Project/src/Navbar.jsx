import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <div className='justify-between border-slate-900 flex w-[100vw] bg-blue-500 text-xl p-[1%] '>
      <div className='w-[20%] text-2xl font-semibold text-white'>
        Qspiders
      </div>
        <div className='w-[65%] text-xl mr-40 '>
         <ul className='flex justify-around text-white'>
           <Link to="/men">
           <li>Men</li>
           </Link>
            <li>Women</li>
            <li>Children</li>
            <li>Old people</li>
         </ul>
       
      </div>
      <div className='w-[15%] text-xl text-white'>
        Authentication
      </div>
    </div>
    </>
  )
}

export default Navbar
