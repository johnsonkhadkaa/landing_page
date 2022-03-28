import React from 'react'
import {Footer , Blog , Possibility, Header, WhatGPT3} from './containers';
import {CTA , Brand , Navbar} from './components'; 
import './App.css';



const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />      
    </div>
  )
}

export default App
