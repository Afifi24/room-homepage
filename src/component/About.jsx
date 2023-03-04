import React from 'react'
import dark from '../images/image-about-dark.jpg'
import light from '../images/image-about-light.jpg'
const About = () => {
  return (
    <div  className='min-h-1/3 h-1/3 '>
       <div className='grid  md:grid-cols-4'>
           <div className='md:col-span-1'><img className='w-full h-full' src={dark} alt="" /></div>
           <div className='md:col-span-2 py-8 px-6 md:p-10'>
           <h2 className='text-3xl font-bold max-w-xs mb-4'>About our furniture</h2>
          <p className='text-sm max-w-sm md:max-w-md mb-8 md:mb-6 text-gray-400 '> Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space. </p>
           </div>
           <div className='col-span-1'><img className='w-full h-full' src={light} alt="" /></div>



       </div>
    </div>
  )
}

export default About