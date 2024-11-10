import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel"
import pro1 from "./Images/pro1.jpg"
import pro2 from "./Images/pro2.webp"
import pro3 from "./Images/pro3.webp"
const Img = () => {
  return (
   <>
    <div className='h-[660px]'>
      <Carousel className='h-[500px]' showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div>
                    <img className='h-[650px]' src={pro1} />
                   
                </div>
                <div>
                    <img className='h-[650px]' src={pro2}/>
                    
                </div>
                <div>
                    <img className='h-[650px]' src={pro3} />
                   
                </div>
      </Carousel>
    </div></>
  )
}

export default Img
