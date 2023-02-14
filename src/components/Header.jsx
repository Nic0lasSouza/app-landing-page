import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
          <h1><span>Lanuch Your App</span> with Confidence And Creativity</h1>

          <p className='details'>Lorem ipsum dolor sit amet co
          nsectetur adipisicing elit. Magni blanditils</p>
          <a href='#' className='cv-btn'>Download</a>
        </div>
    </div>
  )
}

export default Header;