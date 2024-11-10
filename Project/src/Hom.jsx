import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Ball from './Ball'
import Men from './Men'

const Hom = () => {


  return (
    <div>
      <BrowserRouter>
      <Ball/>
      <Routes>
        <Route path='/ball' element={<Men/>}/>

        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Hom
