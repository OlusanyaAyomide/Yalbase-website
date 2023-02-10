import React from 'react'
import zigxag from "../assets/zigzag-line.svg"
import { Lowertext } from './xAnimation'
import outline from "../assets/star-outline.svg"
import star from "../assets/star.svg"
import Balls from './Balls'

export default function Lower() {
  return (
    <section className='cont flex flex-wrap items-center mb-16 ,mt-8 relative ' >
        <div className='w-full md:w-6/12 pr-4'>
            <div className='relative'>
                <h1 className='text-center text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-extrabold lg:mx-8'>Piority Access</h1>
                <div className=' flex justify-center pt-4'>
                    <img src={zigxag} alt="line" className='h-20 sm:h-40 w-20 sm:w-60 relative -top-5'/>
                    <img src={star} alt="stars" className='absolute -top-20 h-12 left-20 w-12'/>
         
                </div>
                <div className='absolute bg-[#AB35CF] h-[70%] w-[30%] right-[20%] blur2'>
                </div>
                <p className='text-sm mt-4 mb-4 leading-6 relative -top-2'>{Lowertext}</p>
            </div>
        </div>
        <div className='absolute left-2 top-4 w-[60px] h-[60px]'>
            <Balls/>
        </div>
        <img src={outline} alt="dtsar" className='absolute right-10 top-2'/>
        <img src={outline} alt="dtsar" className='absolute left-10 bottom-2'/>
        <img src={star} alt="stars" className='absolute bottom-16 h-12 left-[360px] w-12 z-10'/>
        <div className='w-full md:w-6/12 sm:w-10/12 mx-auto md:pt-12 '>
            <form action="#" className='bg-[#1D2939] rounded-lg px-4 py-12 mt-8 lg:w-10/12'>
                <input type="text" className='input' placeholder='Enter your full name rounded-lg'/>
                <input type="text" className='input' placeholder='Enter your Work Email'/>
                <input type="text" className='input' placeholder='Mobole Number'/>
                <input type="text" className='input' placeholder='Company Name'/>
                <select placeholder={'Select a country'} value="null" onChange={() => {}} className='input'>
					<option value="null">Select a country</option>
				</select>
            <textarea placeholder="Drop a message..." cols="30" rows="6" className='input h-40'></textarea>
            </form>
        </div>
    </section>
  )
}
