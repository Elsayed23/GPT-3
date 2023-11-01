import React from 'react'
import ToTopButton from './components/ToTopButton'
import Header from './components/header/Header'
import Brands from './components/brands/Brands'
import WhatIsGPT from './components/whatIsGPT/WhatIsGPT'
import Future from './components/future/Future'
import Possibility from './components/possibility/Possibility'
import GetStarted from './components/getStarted/GetStarted'
import Blog from './components/blog/Blog'
import Footer from './components/footer/Footer'
import './App.css'

const App = () => {

  return (
    <div className='App'>
      <div className="container mx-auto px-4">
        <ToTopButton />
        <Header />
        <Brands />
        <WhatIsGPT />
        <Future />
        <Possibility />
        <GetStarted />
        <Blog />
      </div>
      <Footer />
    </div>
  )
}

export default App