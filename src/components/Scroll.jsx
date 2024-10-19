import React from 'react'
import Hero from './Hero'
import Experience from './Experience'
import Education from './Education'
import Specialization from './Specialization'
import Skills from './Skills'
import Projects from './Projects'
import About from './About';

function Scroll() {
  return (
    <div id='scroll'>
    <Hero/>
    <About />
    <Education/>
    <Experience/>
    <Specialization/>
    <Skills/>
    <Projects/>
    </div>

  )
}

export default Scroll