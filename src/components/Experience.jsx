import React, {useEffect} from 'react'
import Heading from './Heading'
import ExBlock from './ExBlock'
import nnlogo from "../assets/nnlogo.jpeg";
import tnlogo from "../assets/tnlogo.jpeg";
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Experience() {

  useEffect(() => {
    ScrollTrigger.defaults({
      scroller: "html"
    })

      gsap.fromTo(
        "#exBlock",
        { x: 150,opacity : 0  }, 
        {
          x: 0,
          opacity : 1,
          duration: 2,
          stagger: 1,
          scrollTrigger: {
            trigger: '#exBlock',
            scrub: true,
            start: 'top 70%',
            end: 'bottom 50%',
          },
        }
      );
  },[])

  return (
    <>
    <Heading heading="Experience" />
    <div id="experience">
    <ExBlock
    logo={nnlogo}
    name="Novalnet-e-solutions"
    degree="Software Developer - Trainee"
    location="Tambaram"
    duration="5 months"
    role="Developed and integrated payment plugins/apps softwares for E-commerce shop systems & worked on REST apis" />

    <ExBlock
    logo={tnlogo}
    name="Techie Nutpam"
    degree="Frontend Developer - Intern" 
    location="Velachery"
    duration="3 months"
    role="Developed front-end e-commerce websites following UX/UI principles for enterprises based on client requirements." />
    </div>
    </>
  )
}

export default Experience