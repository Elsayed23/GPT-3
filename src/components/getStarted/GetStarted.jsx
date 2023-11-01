import React from 'react'
import { motion } from 'framer-motion'

const GetStarted = () => {
    return (
        <motion.div
            whileInView={{
                opacity: 1,
                transition: { duration: 1, damping: 7, stiffness: 30, type: 'spring' }
            }}
            initial={
                {
                    opacity: 0
                }
            }
            className='getStarted my-32 py-12 px-4 lg:px-10 rounded-[10.724px] border border-black'>
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 lg:gap-0">
                <div className="l___ text-center md:text-left">
                    <h6 className='text-[#0E0E0E] text-xs mb-2 font-bold'>Request Early Access to Get Started</h6>
                    <h2 className='text-2xl font-extrabold'>Register today & start exploring the endless possiblities.</h2>
                </div>
                <button className='text-white bg-black py-3 px-8 rounded-full'>Get Started</button>
            </div>
        </motion.div>
    )
}

export default GetStarted