import React from 'react'
import Heading from './Heading'
import Special from './Special'
import uxui from '../assets/user-experience.png'
import mvc from '../assets/mvc2.jpg'
import web from '../assets/code.png'
import code from '../assets/backend.png'
import responsive from '../assets/responsive-page.png'

function Specialization() {

  return (
    <>
    <Heading heading="Specialization" />
    <div id="specialization">
      <div id="specialHead">
        <p>My specializations</p>
      </div>
      <Special image={uxui} desc="UX/UI design principles"/>
      <Special image={web} desc="Fullstack Web Development"/>  
      <Special image={responsive} desc="Responsive design and development"/>
      <Special image={code} desc="Software Development"/>
      <Special image={mvc} desc="MVC pattern architecture"/>
    </div>
    </>
  )
}

export default Specialization