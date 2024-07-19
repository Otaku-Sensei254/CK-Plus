import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="front-text">
            <h1>Welcome to Ck+ Plus,</h1>
            <p>where we offer our services to your satisfaction and 
            where your vision becomes our mission. 
            </p>
           <Link to="/contact"><button className="btn-2">Get in Touch</button></Link> 
          </div>        
        </div>    
    </>
  )
}

export default Hero