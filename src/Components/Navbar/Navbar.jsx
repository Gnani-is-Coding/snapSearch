import React from 'react'
import './Navbar.css'
import { MdImageSearch } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  return (
    <div>
      <nav className='nav-container'>
        <div className='nav-logo-container'>
          <MdImageSearch style = {{color: 'yellow'}}/>
          <h1 className='nav-heading'>SnapSearch</h1>
        </div>

        <div className='menu-icon-mobile'>
            <IoMenu/>
        </div>

        <div className='nav-buttons-container'>
          <button className='sign-up-btn'>SignUp</button>
          <button className='log-in-btn'>Log In</button>
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar