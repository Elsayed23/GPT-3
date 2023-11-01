import React from 'react'
import Data from './BoxsData'
import TopLineText from '../TopLineText'
import { motion } from 'framer-motion'

const WhatIsGPT = () => {

    const boxs = Data.map(box => {
        return (
            <div key={box.id} className='flex flex-col gap-7'>
                <TopLineText text={box.title} />
                <p className='text-[var(--color-text)] leading-snug'>{box.content}</p>
            </div>
        )
    })

    return (
        <motion.div className='what_is_GPT py-16 px-4 md:px-12 text-white bg-[#042C54] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full after:absolute after:top-0 after:left-0 after:w-full after:h-full'
            whileInView={{
                rotateX: 0,
                opacity: 1,
                transition: { duration: 1, damping: 7, stiffness: 30, type: 'spring', delay: .2 }
            }}
            initial={
                {
                    rotateX: 45,
                    opacity: 0
                }
            }
        >
            <div className="grid lg:grid-cols-4 mb-16 lg:mb-24 gap-4 lg:gap-0">
                <TopLineText text='What is GPT-3' />
                <p className='lg:col-span-3 text-[var(--color-text)]'>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>
            <div className="flex justify-between gap-4 lg:gap-0 lg:items-center flex-col lg:flex-row mb-16 lg:mb-24">
                <h1 className='gradient_text text-3xl md:text-4xl font-extrabold md:max-w-[472px] leading-snug'>The possibilities are beyond your imagination</h1>
                <h4 className='gradient_text cursor-pointer font-light w-fit'>Explore The Library</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {boxs}
            </div>
        </motion.div>
    )
}

export default WhatIsGPT