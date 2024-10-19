
import { ReactTyped } from "react-typed"
import myprojects from '../assets/myprojects.png'
import { FaHeart,FaArrowDown } from "react-icons/fa";
import Heading from "./Heading";


function Hero(){

    return (
          <header className="header">
            <div id="herosub">
              <text id="heading">Hello! I'am Sajeeth</text><br />
              <text id="typewriter"><span>I'am a</span> {""}
              <ReactTyped 
                strings={["Web Developer", "Software Developer"]} 
                cursorChar= " _"
                typeSpeed={50}
                backSpeed={20}
                backDelay={2000}
                loop /></text>
            </div><br />
            <div id="intro">
              <Heading heading="Intro" />
              <p>Passionate Fullstack Developer dedicated to transforming ideas into dynamic web applications that engage users and deliver seamless experiences.
              </p>
            </div>
            <div id="projectDiv">
              <h2>Have a look at my projects</h2>
            <a href="#projects">
                <img src={myprojects} id='myprojects' />
                <FaArrowDown id="projectIcon" />
            </a></div>
            
          </header>
    )
}

export default Hero;