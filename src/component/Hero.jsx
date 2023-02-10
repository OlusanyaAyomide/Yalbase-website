import React from 'react'
import Balls from './Balls'
import { Text } from './xAnimation'
import FormInput from './FormInput'
import line from "../assets/line.svg"
import star from "../assets/star.svg"

export default function Hero() {
  return (
    <section className='pt-4  cont relative overflow-hidden pb-32 border-b border-gray-200'>
    <div className='h-[70px] w-[70px]  mr-[15%] md:mr-[20%] ml-auto mb-4'>
      <Balls/>
    </div>
        <div className='md:flex items-center'>
            <div>
            <div className='w-[160px] h-[160px] hidden md:block '>
            <Balls/>
              </div>
            </div>
        <div className='w-full relative'>
            <h1 className='text-center text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-extrabold lg:mx-8'>Turn Your best customers into <span className='whitespace-nowrap text-[#A75FD2]'>Loyal fans</span></h1>
            <div className='absolute w-[50%] h-[140%] opacity-40 left-[25%] -bottom-[20%] md:drop2 drop bg-[#A75FD2] rounded-[40%] -z-10'>  
           </div>
           <img src={star} alt="img" className='h-10 w-10 absolute -top-12 left-8  md:left-32' />
           <img src={star} alt="img" className='h-10 hidden md:block w-10 absolute top-16 right-32 ' />
           <img src={star} alt="img" className='h-10 w-10 md:hidden absolute top-44 -z-10 right-16 ' />
           <img src={star} alt="img" className='h-10 w-10 md:hidden absolute top-60 -z-10 left-8' />
        </div>
        </div>
        <div className='md:ml-[160px] relative  text-gray-300 text-sm mt-4 mb-4 leading-6'>
            <img src={line} alt="img"  className='absolute right-4 md:right-8 top-40 md:top-20 -z-10 opacity-50 md:opacity-100'/>
            <p>{Text}</p>
            <FormInput/>
        </div>
        <div className='absolute h-[180px] -z-10 w-[180px] rounded-full -right-10 top-[25%] opacity-40 md:opacity:100 sm-shadow'> <Balls/></div>
    </section>
  );
}
