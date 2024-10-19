import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import Heading from './Heading'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function About() {

    useEffect(() => {
        ScrollTrigger.defaults({
          scroller: "html"
        })
    
        const paragraph = document.getElementById("splitText");
        const words = paragraph.innerText.split(' ').map((word) => `<span class='word'>${word}</span>`).join(' ');
        paragraph.innerHTML = words;
    
        const wordElements = document.querySelectorAll('.word');
    
        wordElements.forEach((word,) => {
          gsap.fromTo(
            word,
            { y: 100, color: "rgba(255, 255, 255, 0.021)" }, 
            {
              color: "white" ,
              y: 0,
              duration: 1,
              stagger: 9,
              scrollTrigger: {
                trigger: word,
                scrub: true,
                start: 'top 70%',
                end: 'bottom 50%',
              },
            }
          );
        });
    
      },[])
  return (
    <>
    <Heading heading="About" />
    <div id="about">
      <div>
      <p id='splitText'>
          Results-oriented Fullstack Developer with a proven track record in Website & Software development. 
          I specialize in creating websites that adhere to best practices in UX/UI design, delivering seamless and visually appealing user experiences. 
          Eager to contribute expertise in innovative projects and thrive in a dynamic team environment.
        </p>
    </div>
    </div>
    </>
  )
}

export default About