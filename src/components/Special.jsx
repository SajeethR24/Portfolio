import React,{useEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Special({image , desc}) {

    useEffect(() => {
        ScrollTrigger.defaults({
          scroller: "html"
        })
    
          gsap.fromTo(
            ".special",
            { y: 150,opacity : 0, scale: 1.5  }, 
            {
              y: 0,
              scale: 1,
              opacity : 1,
              duration: 2,
              stagger: 2,
              scrollTrigger: {
                trigger: '.special',
                scrub: true,
                start: 'top 80%',
                end: 'bottom 40%',
              },
            }
          );
      },[])

  return (
    <div className="special">
        <img src={image} alt="" />
        <p className="specialDesc">{desc}</p>
    </div>
  )
}

export default Special