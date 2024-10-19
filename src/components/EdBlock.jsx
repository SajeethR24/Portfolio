import React from 'react'

function EdBlock({name , logo , degree, location , duration}) {
  return (
    <div className='Block' id='edBlock'>
    <div class="logo"><img src={logo} alt="logo" /></div>
    <div className="details">
      <h3>{name}</h3>
      <h4>{degree}</h4>
      <h5>{location}</h5>
      <h6>{duration}</h6>
    </div>
    </div>
  )
}

export default EdBlock