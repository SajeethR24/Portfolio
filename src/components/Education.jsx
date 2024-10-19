import React, { useEffect } from 'react'
import Heading from './Heading'
import EdBlock from './EdBlock'
import amjclogo from "../assets/amjclogo.jpg";
import bmhsslogo from "../assets/bmhsslogo.png";
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Education() {

  useEffect(() => {
    ScrollTrigger.defaults({
      scroller: "html"
    })

      gsap.fromTo(
        "#edBlock",
        { x: 150,
          opacity : 0 ,
          // scale: 2.5 
        }, 
        {
          x: 0,
          opacity : 1,
          // scale : 1,
          duration: 3,
          stagger: 2,
          scrollTrigger: {
            trigger: '#edBlock',
            scrub: true,
            start: 'top 70%',
            end: 'bottom 50%',
          },
        }
      );
  },[])


  return (
    <>
    <Heading heading="Education" />
    <div id="education">
    <EdBlock 
    logo={amjclogo} 
    name="Agurchand Manmull Jain College" 
    degree="Bachelor of Science - Computer Science" 
    location="Meenambakkam"
    duration="2020 - 2023" />
    
    <EdBlock 
    logo={bmhsslogo}
    name="Bharathiyar Matric Hr School" 
    degree="Higher Secondary - Computer Science" 
    location="Guduvancheri"
    duration="2018 - 2020" />
    </div>
    </>
  )
}

export default Education