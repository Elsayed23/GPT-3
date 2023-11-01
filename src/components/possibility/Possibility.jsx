import React from 'react'
import possibility from '../../assets/possibility.png'
import { motion } from 'framer-motion'

const Possibility = () => {
    return (
        <div className='mt-24'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                <motion.div className="img"
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1, damping: 7, stiffness: 30, type: 'spring' }
                    }}
                    initial={
                        {
                            x: '-100%',
                            opacity: 0
                        }
                    }
                >
                    <img src={possibility} alt="possibility" className='w-full' />
                </motion.div>
                <div className="r">
                    <motion.p
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
                        className='text-sm text-[#71E5FF] mb-4'>Request Early Access to Get Started</motion.p>
                    <motion.h1
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
                        className='gradient_text text-4xl font-extrabold leading-snug mb-6'>The possibilities are beyond your imagination</motion.h1>
                    <motion.p
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
                        className='text-[var(--color-text)] mb-6'>
                        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                    </motion.p>
                    <motion.h4 whileInView={{
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
                        className='text-[#FF8A71] text-sm'>Request Early Access to Get Started</motion.h4>
                </div>
            </div>
        </div>
    )
}

export default Possibility