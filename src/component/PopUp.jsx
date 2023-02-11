import React,{useEffect} from 'react'
import check from "../assets/Check.svg"
import { popUptext } from './xAnimation'
export default function PopUp({setIsPoppedUp}) {

    useEffect(()=>{
        setTimeout(()=>{
            setIsPoppedUp(false)
        },4000)
    })
  return (
    <div className='fixed inset-0 h-[100vh] w-[100vw] bg-[black]/50 flex items-center justify-center'>
            <div className='w-8/12 md:w-7/12 lg:w-6/12 rounded-xl p-4 md:ml-24 md:mb-24 bg-[#18171E] '>
                <div className='py-8 flex items-center justify-center'>
                    <div className='rounded-full p-2 bg-[black]/20'>
                        <div  className='flex items-center justify-center h-20 w-20 bg-[#20AC5B] rounded-full overflow-hidden'>
                            <img src={check} alt="" />
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <h1 className='text-center text-2xl font-bold'>Congratulations</h1>
                    <div className='pt-8'>
                        <p className='text-gray-300 text-sm leading-6'>
                            {popUptext}
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}



