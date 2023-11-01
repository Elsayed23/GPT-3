import React from 'react'
import Navbar from '../navbar/Navbar'
import aiImg from '../../assets/ai.png'
import people from '../../assets/people.png'
import { motion } from 'framer-motion'

const Header = () => {

  return (
    <div className="header overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full after:absolute after:top-0 after:right-0 after:w-full after:h-full">
      <Navbar />
      <header className='lg:h-[calc(100vh-112px)] pt-[112px] min-h-[calc(100vh-112px)] text-white'>
        <div className="h-full flex items-center">
          <div className="flex flex-col-reverse lg:flex-row gap-8 justify-between">
            <motion.div
              className="flex flex-col justify-center basis-6/12"
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
              <h1 className='gradient_text text-3xl md:text-5xl font-extrabold md:leading-snug mb-6'>Let’s Build Something
                amazing with GPT-3
                OpenAI</h1>
              <p className='text-[var(--color-text)] mb-6'>
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
              </p>
              <div className="flex relative mb-5">
                <input type="text" placeholder='Your Email Address' className='bg-[#052D56] w-full placeholder:text-[#3D6184] py-5 focus:outline-none pl-4 pr-[152.53px] rounded-md' />
                <button className='bg-[#FF4820] text-sm lg:text-base px-7 h-full right-0 rounded-md absolute'>Get Started</button>
              </div>
              <div className="flex items-center lg:flex-row flex-col gap-3">
                <img src={people} alt="" />
                <h6 className='text-xs'>1,600 people requested access a visit in last 24 hours</h6>
              </div>
            </motion.div>
            <motion.div className="overflow-hidden basis-5/12"
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
              <img src={aiImg} alt="ai" className='object-cover' />
            </motion.div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header