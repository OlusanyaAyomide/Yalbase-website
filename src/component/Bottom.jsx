import React from 'react'
import Balls from "./Balls";
import star from '../assets/star.svg';
import starOutline from '../assets/star-outline.svg';
import zigzagLine from '../assets/zigzag-line.svg';

export default function Bottom(){
	return(
    <section className="pt-4  cont">
			<div className='flex flex-row flex-wrap justify-center pb-[8em] border-b-2 border-gray-500/50 mb-[2em]'>
				<div className='basis-1/2 flex flex-col gap-[2em]'>
					<div className='relative'>
						<img src={starOutline} alt="outlined star" className='absolute w-[40px] h-[40px] top[0px] right-[2em]' />			
						<img src={star} alt="star" className="w-[20px] h-[20px] absolute top-[10em] right-[8em]" />
						<div className="h-[4em] w-[4em] ml-[4em] mt-20">
							<Balls />
						</div>
					</div>
					<div className='mt-[4em]'>
						<h1 className="word-wrapping text-center leading-[100%] text-[5em] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold lg:mx-8">
							Priority Access
						</h1>
						<img src={zigzagLine} alt="Zig Zag Line" className="mx-auto mt-[8px]"/>
						<p className='ml-[1px] mr-[1px] leading-[130%] text-[1.1rem]'>
						Get ready to revolutionize the way you interact with your
						customers and drive sales with Loyalbaze. Skip the waitlist
						and get exclusive priority access to LoyalBaze. Limited slots available.
						Please tell us a bit about your business and needs and of our consultants will be
						in touch Immediately!
						</p>
						<div className='relative mt-[4em]'>
							<img src={star} alt="star" className='absolute bottom-[1px] right-[1px]'/>
						</div>
					</div>
				</div>
				<div className="md:flex items-center basis-1/2">
					<div className='w-11/12 p-8 m-0-auto mx-auto my-2 rounded-xl bg-[#1D2939]'>
						<div>
							<h2 className='text-lg ml-auto mr-auto mb-10'>Book a Consultation with us</h2>
							<div className='flex flex-col gap-7'>
								<input type="text" placeholder='Enter your full name' className='indent-2 placeholder-white/80 border-solid border-[0.5px] h-10 bg-transparent rounded-lg'/>
								<input type="text" placeholder='Enter your work email' className='indent-2 placeholder-white/80 border-solid border-[0.5px] h-10 bg-transparent rounded-lg'/>
								<input type="text" placeholder='Mobile Number' className='indent-2 placeholder-white/80 border-solid border-[0.5px] h-10 bg-transparent rounded-lg'/>
								<input type="text" placeholder='Company Name' className='indent-2 placeholder-white/80 border-solid border-[0.5px] h-10 bg-transparent rounded-lg'/>
								<select placeholder={'Select a country'} value="null" onChange={() => {}} className='indent-2 border-[0.5px] border-solid h-10 bg-transparent rounded-lg'>
									<option value="null">Select a country</option>
								</select>
								<textarea placeholder="Drop a message..." cols="30" rows="6" className='indent-2 placeholder-white placeholder-opacity-80 order-solid border-[0.5px] p-2 bg-transparent rounded-lg'></textarea>
								<button className='get-started-btn'>Send Request</button>
							</div>
						</div>
					</div>
				</div>				
			</div>
    </section>
	)
}