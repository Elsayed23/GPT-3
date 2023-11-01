import React from 'react'
import Card from './BlogCard'
import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'
import { motion } from 'framer-motion'

const Blog = () => {

    return (
        <div className='blog mb-32'>
            <motion.h1
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
                className='gradient_text font-extrabold text-5xl lg:max-w-[470px] leading-snug mb-28'>A lot is happening,
                We are blogging about it.</motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                <Card img={blog1} />
                <div className="flex flex-col gap-9">
                    <Card img={blog2} />
                    <Card img={blog3} />
                </div>
                <div className="flex flex-col gap-9">
                    <Card img={blog4} />
                    <Card img={blog5} />
                </div>
            </div>
        </div>
    )
}

export default Blog