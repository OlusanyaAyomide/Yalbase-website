import React from 'react'
import { FooterText } from './xAnimation'
export default function Footer() {
  return (
    <section className='flex md:flex-row  flex-col items-center cont py-3 text-xs text-gray-300 border-t border-gray-200/50'>
      <div className='md:hidden'>
      <div className='w-full md:w-4/12  pr-4 flex items-center'>
            <span className='fa fa-home mr-4'></span>
            <p >{FooterText}</p>
        </div>
        <div className='flex justify-between items-center w-full md:w-8/12 mt-4 md:mt-0'>
        <p className=''>Loyalbaze is almost here</p>
        <p className='fa fa-phone mr-2 text-xs'>+234 903 618 9485</p>
        </div>
      </div>
       <div className='justify-between mx-2 hidden md:flex w-full'>
       <p >{FooterText}</p>
       <p className=''>Loyalbaze is almost here</p>
      <p className='fa fa-phone mr-2 text-xs'>+234 903 618 9485</p>
       </div>
    </section>
  )
}
