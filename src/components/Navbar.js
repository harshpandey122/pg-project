import React from 'react'
import {Link} from "react-router-dom"
import Services from './Services'
const Navbar = () => {
  return (
    <header className="header">
        <nav className='navbar'> 
        <Link to="/services">Contact-us</Link>
        </nav>

    </header>
  )
}

export default Navbar 

