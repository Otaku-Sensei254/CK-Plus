import React from 'react'
import '../Components/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="header">
            <Link to="/"><h1 className="Logo">Ck+ Plus</h1></Link>
            <div className="navbar-links">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
            </ul>
            
        </div>
        </div>
        
    </>
  )
}

export default Navbar
