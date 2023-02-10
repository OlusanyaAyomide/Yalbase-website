import React from 'react'

export default function Header() {
  return (
    <div className='cont md:px-8 lg:px-12 pt-8 flex justify-between'>
        <div className='relative flex items-center white-line'>
            <span className='ml-3 mr-1 relative'>
                <i className='absolute rounded-full h-1 w-1 top-[45%] left-[45%] bg-white'></i>
                <i class="fa-solid love-gradient text-3xl fa-heart"></i></span>
            <span className='text-2xl md:text-3xl lg:text-4xl font-semibold'>yalbaze</span>  
        </div>
       <div className='bg-gradient-to-br from-myblue to-mypink p-[1px] rounded-3xl'>
        <div className='bg-darkblue px-4 sm:px-6 py-2 rounded-3xl'>
            Get Priority Access 
        </div>
       </div>
     </div>
  )
}
