import React from 'react';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <nav className={}>
        <a href='#' className='logo'>
            <img src={logo} alt=''/>
        </a>
        <input type='checkbox' className='menu-btn' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li></li>
        </ul>
    </nav>
  )
}

export default Navbar