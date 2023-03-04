import React, { useState } from 'react'
import arrow from '../images/icon-arrow.svg'
import img1 from '../images/desktop-image-hero-1.jpg'
import imgb1 from '../images/mobile-image-hero-1.jpg'
import img2 from '../images/desktop-image-hero-2.jpg'
import imgb2 from '../images/mobile-image-hero-2.jpg'
import img3 from '../images/desktop-image-hero-3.jpg'
import imgb3 from '../images/mobile-image-hero-3.jpg'

import left from '../images/icon-angle-left.svg'
import right from '../images/icon-angle-right.svg'
const slide =[
  {
    image:img1,
    id:1,
  },
  {
    image:img2,
    id:2
  },
  {
    image:img3,
    id:3,
  }
]
const slidemobile =[
  {
    imagee:imgb1,
    id:1,
  },
  {
    imagee:imgb2,
    id:2
  },
  {
    imagee:imgb3,
    id:3,
  }
]


const Header = () => {
  const [index,setIndex] = useState(0)
const {id,image} = slide[index]
const {idd,imagee} = slidemobile[index]
   const Next =()=>{
    setIndex(index+1)
    if(index >= slide.length-1){
      setIndex(0)
    }
    if(index >= slidemobile.length-1){
      setIndex(0)
    }
   }
   const Preve = ()=>{
    setIndex(index-1)
    if(index<=0){
      setIndex(slide.length-1)
    }
    if(index<=0){
      setIndex(slidemobile.length-1)
    }
   }
  return (
    <div className=' header'>
      <div className='flex flex-col md:flex-row h-full '>
          {/* desktop */}
         <div className='bg-red-500 h-1/2  md:w-3/5 md:h-full hidden md:flex relative '>
          <img className='w-full h-full object-cover' src={image} alt="" />
          <div className='absolute -bottom-10 right-0 flex bg-black px-6 py-3 gap-6 md:hidden'>
             <img onClick={Preve} className='cursor-pointer' src={left} alt="" />
             <img onClick={Next} className='cursor-pointer' src={right} alt="" />
          </div>
         </div>
         {/* mobile */}
         <div className='bg-red-500 h-1/2  md:min-w-3/5 md:hidden md:w-3/5 md:h-full  relative '>
          <img className='w-full h-full object-cover' src={imagee} alt="" />
          <div className='absolute bottom-0 right-0 flex bg-black px-6 py-3 gap-6 md:hidden'>
             <img onClick={Preve} className='cursor-pointer' src={left} alt="" />
             <img onClick={Next} className='cursor-pointer' src={right} alt="" />
          </div>
         </div>

         <div className=' h-1/2 md:min-w-2/5 md:w-2/5 md:h-full  py-8 px-6 md:p-10 lg:p-16 relative'>
          <h2 className='text-3xl font-bold max-w-xs mb-4'> Discover innovative ways to decorate</h2>
          <p className='text-sm max-w-sm md:max-w-md mb-4 md:mb-6 text-gray-400 '>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
          <div className='flex items-center gap-6 '>
             <a href="#" className='uppercase tracking-hit text-gray-500'>shop now </a>
             <img src={arrow} alt="" />
          </div>
          <div className='absolute bottom-0 left-0  bg-black px-14 py-4 gap-12 hidden md:flex'>
             <img onClick={Preve} className='cursor-pointer' src={left} alt="" />
             <img onClick={Next} className='cursor-pointer' src={right} alt="" />
          </div>
         </div>
      </div>
    </div>
  )
}

export default Header