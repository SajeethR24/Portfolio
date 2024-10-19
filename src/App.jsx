import './App.css'
import Navbar from './components/Navbar'
import ProfileTab from './components/ProfileTab'
import Scroll from './components/Scroll'
import Lenis from 'lenis'
import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react'

function App() {
  
  useGSAP(() => {
    gsap.fromTo("#profile",{x : "-150%", opacity : 0},{
      x : 0,
      opacity : 1,
      duration : 1.5
    })
    gsap.fromTo("#navbar",{x : "150%", opacity : 0},{
      x : 0,
      opacity : 1,
      duration : 1.5
    })
    
  })

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf);
  return (
    <div id='home'>
    <ProfileTab />
    <Scroll />
    <Navbar/>
    </div>
  )
}

export default App
