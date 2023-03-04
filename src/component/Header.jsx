import React, { useState } from 'react'
import logo from '../images/logo.svg'
import arrow from '../images/icon-arrow.svg'
import img1 from '../images/desktop-image-hero-1.jpg'
import imgb1 from '../images/mobile-image-hero-1.jpg'
import img2 from '../images/desktop-image-hero-2.jpg'
import imgb2 from '../images/mobile-image-hero-2.jpg'
import img3 from '../images/desktop-image-hero-3.jpg'
import imgb3 from '../images/mobile-image-hero-3.jpg'
import humberger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import left from '../images/icon-angle-left.svg'
import right from '../images/icon-angle-right.svg'

import { useRef } from 'react'
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
  const [isopen,setIsopen] = useState(false)
const {id,image} = slide[index]
const {idd,imagee} = slidemobile[index]
const Close = (e)=>{
      if(useref.current===e.target){
        setIsopen(false)
      }
}
const useref = useRef()
const HideShow = ()=>{
  setIsopen(!isopen)
}
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
         <div className=' h-1/2  md:w-3/5 md:h-full hidden md:flex relative '>
          <div className='absolute  w-full h-full'>
                <img className='w-full h-full object-cover  ' src={image} alt="" />
          </div> 
          <nav className='hidden absolute top-10 left-20 md:flex gap-10 items-center'>
           <div><img src={logo} alt="" /></div>
           <ul className='md:flex items-center gap-6'>
           <div className='text-white group'>
              <a href="#">home</a>
              <div className='group-hover:border-white border-b-2 border-transparent mx-2'></div>
           </div>
           <div className='text-white group'>
              <a href="#">shop</a>
              <div className='group-hover:border-white border-b-2 border-transparent mx-2'></div>
           </div>
           <div className='text-white group'>
              <a href="#">about</a>
              <div className='group-hover:border-white border-b-2 border-transparent mx-2'></div>
           </div>
           <div className='text-white group'>
              <a href="#">contact</a>
              <div className='group-hover:border-white border-b-2 border-transparent mx-2'></div>
           </div>
            
           </ul>
        </nav>

         </div>
         {/* mobile */}
         <div className='bg-red-500 h-1/2  md:min-w-3/5 md:hidden md:w-3/5 md:h-full  relative '>
          <img className='w-full h-full object-cover' src={imagee} alt="" />
          <div className='absolute bottom-0 right-0 flex px-4 py-3 bg-black  gap-10 md:hidden'>
             <img onClick={Preve} className='cursor-pointer' src={left} alt="" />
             <img onClick={Next} className='cursor-pointer' src={right} alt="" />
          </div>
          {/* nav menu mobile */}
          {/* nav menu */}
          <div className='absolute flex gap-36   top-7 left-7 md:hidden'>
                   <img onClick={HideShow} className='cursor-pointer z-50' src={ isopen? '': humberger} alt="" />
                   <img src={logo} alt="" />
            </div>
          {isopen && <nav onClick={Close} ref={useref} className=' bg-transparent  h-screen z-40   fixed right-0  top-0 left-0 md:hidden '>
          <div className='absolute flex gap-36   top-7 left-7 md:hidden'>
                   <img onClick={HideShow} className='cursor-pointer z-50' src={ isopen? close: humberger} alt="" />
            </div>
             <div className='absolute flex top-0 gap-10 items-center left-0'>
          <ul className='flex text-black bg-white w-screen pl-36 p-6 items-center gap-6'>
           <div className=' group'>
              <a href="#">home</a>
              <div className='group-hover:border-black border-b-2 border-transparent mx-2'></div>
           </div>
           <div className=' group'>
              <a href="#">shop</a>
              <div className='group-hover:border-black border-b-2 border-transparent mx-2'></div>
           </div>
           <div className=' group'>
              <a href="#">about</a>
              <div className='group-hover:border-black border-b-2 border-transparent mx-2'></div>
           </div>
           <div className=' group'>
              <a href="#">contact</a>
              <div className='group-hover:border-black border-b-2 border-transparent mx-2'></div>
           </div>
            
           </ul>
             </div>
        </nav>}

         </div>

         <div className=' h-1/2 md:min-w-2/5 md:w-2/5 md:h-full  py-8 px-6 md:p-10 lg:p-16 relative'>
          <h2 className='text-3xl md:text-4xl font-bold  mb-4'> Discover innovative ways to decorate</h2>
          <p className='text-sm max-w-sm md:max-w-md mb-4 md:mb-6 text-gray-400 '>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
          <div className='flex items-center gap-6 '>
             <a href="#" className='uppercase tracking-hit text-gray-500'>shop now </a>
             <img src={arrow} alt="" />
          </div>
          <div className='absolute bottom-0 left-0  bg-black px-6 py-6 gap-28 hidden md:flex'>
             <img onClick={Preve} className='cursor-pointer' src={left} alt="" />
             <img onClick={Next} className='cursor-pointer' src={right} alt="" />
          </div>
         </div>
      </div>
    </div>
  )
}

export default Header