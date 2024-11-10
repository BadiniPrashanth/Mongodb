// import React, { useState } from 'react'
import Navbar from './Navbar';




import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import Address from './Address';

import Home from './Home';
import Men from './Men';
import Add from './Add';
import Product from './Product';


const Apps = () => {
    // const [count,setCount]=useState(0);
  return (
    <div>
    
     
      
     {/* <BrowserRouter> */}
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>} />
      <Route path='/Add' element={<Add/>} />
      <Route path='/men' element={<Men/>} />
      <Route path='/product/:id' element={<Product/>} />
      {/* <Route path='/address' element={<Address/>} />
      <Route path='/address' element={<Address/>} /> */}
     </Routes>
     {/* </BrowserRouter> */}
    
     
    </div>
  )
}

export default Apps
