import React from 'react'

export default function FormInput() {
  return (
    <div className='my-4 md:w-[60%] lg:w-[50%] mx-auto pt-4 w-[80%]'>
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
        </div>
    </div>
  )
}
