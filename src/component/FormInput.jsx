import React from 'react'
import { iconText } from './xAnimation'

export default function FormInput() {
  const icons = iconText.map((item,key)=>{
    console.log(key)
    return(<span className={`${key === 0 || key === 2?"bg-myblue":"bg-mypink"} rounded-full text-xl flex items-center justify-center h-9 w-9 relative right-${key}`} key={key}>{item}</span>)
  })
  return (
    <div className='my-4 md:w-[60%] lg:w-[50%] mx-auto  w-[80%] pt-16'>
        <div className='my-2 relative'>
            <input type="text" className='py-3 px-4 pl-12 bg-transparent border border-white w-full input-shadow outline-none rounded-lg' placeholder='Tell us your name '/>
            <span className='absolute left-4 text-lg top-[20%] fa fa-user outline-none '></span>
        </div>
        <div className='my-2 mt-4 relative'>
            <input type="text" className='py-3 px-4 pl-12 bg-transparent border border-white w-full input-shadow outline-none rounded-lg' placeholder='Enter your email Address '/>
            <span className='absolute left-4 text-lg top-[23%] fa fa-envelope outline-none '></span>
        </div>
        <div className='my-6'>
            <button className='block py-2 w-full rounded-[200px] button-grad'>Get early access</button>
            <div className='mt-2 flex justify-center py-2 w-full items-center' >
              {icons}
              <span className='ml-1'>+27 joined</span>
            </div>
        </div>
    </div>
  )
}
