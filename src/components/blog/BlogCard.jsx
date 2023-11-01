import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ img, classes }) => {
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
            className='card text-white flex flex-col justify-between bg-[#042C54] overflow-hidden rounded-tl-sm rounded-tr-sm'>
            <div className="t__">
                <img src={img} alt="blog" className='w-full mb-3 scale-[1.03]' />
                <div className="p-5">
                    <div className="t__">
                        <h6 className='text-xs mb-2'>Sep 26, 2021</h6>
                        <h2 className={`${classes} mb-7`}>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
                    </div>
                </div>
            </div>
            <h6 className='text-xs p-5'>Read Full Article</h6>
        </motion.div>
    )
}

export default Card