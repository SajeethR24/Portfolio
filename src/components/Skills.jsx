import React from 'react'
import Heading from './Heading'
import nodeJS from '../assets/nodeJS.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import jquery from '../assets/jquery.png'
import mySQL from '../assets/mySQL.png'
import react from '../assets/react.png'
import bootstrap from '../assets/bootstrap.png'
import mongoDB from '../assets/mongoDB.png'
import php from '../assets/php.png'
import expressJS from '../assets/expressJS.png'

function Skills() {

  const skillsData = {
    html: { img: html, text: 'HTML' },
    css: { img: css, text: 'CSS' },
    javascript: { img: javascript, text: 'JavaScript' },
    react: { img: react, text: 'ReactJS' },
    bootstrap: { img: bootstrap, text: 'Bootstrap' },
    jquery: { img: jquery, text: 'jQuery' },
    'node.js': { img: nodeJS, text: 'Node.js' },
    mySQL: { img: mySQL, text: 'MySQL' },
    PHP: { img: php, text: 'PHP' },
    expressJS: { img: expressJS, text: 'ExpressJS' },
    mongoDB: { img: mongoDB, text: 'MongoDB' }
  }

  return (
    <>
      <Heading heading="Skills" />
      <div id="skills">
        {Object.keys(skillsData).map((skill) => (
          <div key={skill} class='skill'>
            <img src={skillsData[skill].img} alt={skillsData[skill].text} />
            <p>{skillsData[skill].text}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Skills