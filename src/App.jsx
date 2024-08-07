import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas, Footer} from './components'
import Purpose from './components/Purpose'
function App() {
  

  return (
    <>
      <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Purpose/>
        {/* <Feedbacks/> */}
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
