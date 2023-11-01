import React from 'react'
import Data from './futureData'
import TopLineText from '../TopLineText'
import { motion } from 'framer-motion'

const Future = () => {

    const ListData = Data.map(content => {
        return (
            <motion.div key={content.id} className='grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-9'
                whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 1, damping: 7, stiffness: 30, type: 'spring' }
                }}
                initial={
                    {
                        x: '100%',
                        opacity: 0
                    }
                }
            >
                <TopLineText text={content.title} classes='w-[170px] text-white' />
                <p className='lg:col-span-2 text-[var(--color-text)]'>{content.content}</p>
            </motion.div>
        )
    })

    return (
        <div className='mt-48 mb-32 overflow-hidden'>
            <div className="flex flex-col lg:flex-row gap-24">
                <div className=' basis-6/12'>
                    <motion.h1 whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1, damping: 7, stiffness: 30, type: 'spring' }
                    }}
                        initial={
                            {
                                x: '-100%',
                                opacity: 0
                            }
                        } className='gradient_text text-3xl md:text-4xl font-extrabold md:leading-snug mb-6'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</motion.h1>
                    <motion.p whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1, damping: 7, stiffness: 30, type: 'spring' }
                    }}
                        initial={
                            {
                                x: '-100%',
                                opacity: 0
                            }
                        } className='text-[#FF8A71] text-sm'>Request Early Access to Get Started</motion.p>
                </div>
                <div className="flex flex-col gap-16 basis-4/6">
                    {ListData}
                </div>
            </div>
        </div>
    )
}

export default Future