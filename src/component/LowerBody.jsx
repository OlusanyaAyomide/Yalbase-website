import React from 'react'
import Balls from "./Balls";
import star from '../assets/star.svg';
import starOutline from '../assets/star-outline.svg';
import zigzagLine from '../assets/zigzag-line.svg';
import { Lowertext } from './xAnimation';


export default function LowerBody() {
  return (
    <section className="pt-16  cont">
			<div className='flex flex-row flex-wrap  pb-[8em] border-b-2 border-gray-500/50 mb-[2em]'>
				<div className='flex flex-col gap-[2em] w-full md:w-6/12 bg-red-500'>
					<div className='relative'>
						<img src={starOutline} alt="outlined star" className='absolute w-[40px] h-[40px] top[0px] right-[2em]' />			
						<img src={star} alt="star" className="w-[20px] h-[20px] absolute top-[10em] right-[8em]" />
						<div className="h-[4em] w-[4em] ml-[4em] mt-20">
							<Balls />
						</div>
					</div>
					<div className='mt-4'>
						<h1 className="text-center text-3xl mb-2 sm:text-4xl md:text-5xl lg:text-6xl font-extrabold lg:mx-8">
							Priority Access
						</h1>
						<img src={zigzagLine} alt="Zig Zag Line" className="mx-auto mt-[8px]"/>
						<p className='text-gray-300 text-sm mt-4 mb-4 leading-6'>
                            {Lowertext}
						</p>
						<div className='relative mt-[4em]'>
							<img src={star} alt="star" className='absolute bottom-[1px] right-[1px] h-10 w-10'/>
						</div>
					</div>
				</div>
				<div className=" bg-red-500">
					<div className='w-11/12 py-2 px-6 mx-auto my-2 rounded-xl bg-[#1D2939]'>
						<div>
							<h2 className='text-base  mb-10'>Book a Consultation with us</h2>
							<div className='flex flex-col gap-7'>
								<input type="text" placeholder='Enter your full name' className='indent-2 outline-none placeholder-white/80 border-solid border-[0.5px] h-10 bg-transparent rounded-lg'/>
								<input type="text" placeholder='Enter your work email' className='indent-2 outline-none placeholder-white/80 border-solid border-[0.5px] h-10 bg-transparent rounded-lg'/>
								<input type="text" placeholder='Mobile Number' className='indent-2 outline-none placeholder-white/80 border-solid border-[0.5px] h-10 bg-transparent rounded-lg'/>
								<input type="text" placeholder='Company Name' className='indent-2 outline-none placeholder-white/80 border-solid border-[0.5px] h-10 bg-transparent rounded-lg'/>
								<select placeholder={'Select a country'} value="null" onChange={() => {}} className='indent-2 border-[0.5px] border-solid h-10 bg-transparent rounded-lg'>
									<option value="null">Select a country</option>
								</select>
								<textarea placeholder="Drop a message..." cols="30" rows="6" className='indent-2 placeholder-white placeholder-opacity-80  border-[0.5px] p-2 bg-transparent rounded-lg outline-none'></textarea>
								<button className='bg-gradient-to-br from-myblue to-mypink w-full block rounded-[200px] py-2 px-6'>Send Request</button>
							</div>
						</div>
					</div>
				</div>				
			</div>
    </section>
  )
}
