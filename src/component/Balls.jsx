import React from 'react'
import { motion } from 'framer-motion'
import { BallAnimation } from './xAnimation'

export default function Balls() {
  return (
    <div className='h-full w-full rounded-full relative bg-myblue overflow-hidden'>
        <motion.div className='absolute red-grad h-full w-full top-[5%] rounded-[45%] -left-[130%]' variants={BallAnimation} initial="initial" animate="animate">
        </motion.div>
    </div>
  )
}
