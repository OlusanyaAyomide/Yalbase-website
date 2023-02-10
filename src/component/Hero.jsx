import React from 'react'
import Balls from './Balls'

export default function Hero() {
  return (
    <section className='pt-4  cont'>
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
            <div className='absolute w-[50%] h-[140%] opacity-40 left-[25%] -bottom-[20%] md:drop2 drop bg-[#A75FD2] rounded-[40%]'>   
           </div>
        </div>
        </div>
        <div className='md:ml-[160px] text-gray-900'>

        </div>
    
    </section>
  )
}
