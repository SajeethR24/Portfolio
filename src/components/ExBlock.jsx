import React from 'react'

function ExBlock({name , logo , degree, location , duration, role}) {
  return (
    <div className='Block' id='exBlock'>
    <div class="logo"><img src={logo} alt="logo" /></div>
    <div className="details">
      <h3>{name}</h3>
      <h4>{degree}</h4>
      <h5>{location}</h5>
      <h6>{duration}</h6>
      <div id="expdetails">
        <h4>{role}</h4>
      </div>
    </div>
    </div>
  )
}

export default ExBlock