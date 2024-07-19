import React from 'react'
import '../styles/Services.css'
import Navbar from '../Components/Navbar'
import Wed from '../Images/wed.jpg'
import Food from '../Images/cattering.jpg'
import Bday from '../Images/bday.jpg'

import { Link } from 'react-router-dom'
function Services() {
  return (
    <div>
        <Navbar/>
        <div className="serve-info">
           <h1>
        We offer these services
      </h1>
        </div>
     
      <div className="card-container">
        <div className="card">
          <img src={Wed}/>
          <div className="card-content">
            <h3>Weddings</h3>
            <p>Crafting timeless memories with impeccable elegance,
               we turn your dream wedding into a breathtaking reality
              <Link to="/contact"><button className='btn-1'>Contact us</button></Link>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Food}/>
          <div className="card-content">
            <h3>Food Cattering</h3>
            <p>Delight in every bite with our exquisite catering, 
              where culinary artistry meets unforgettable flavor
              <Link to="/contact"><button className='btn-1'>Contact us</button></Link>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Bday}/>
          <div className="card-content">
            <h3>Birthdays</h3>
            <p>We know how to make your party feel like a party.
              Turning moments into memories, one birthday at a time

              <Link to="/contact"><button className='btn-1'>Contact us</button></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
