import React from 'react'
import '../styles/About.css'
import Navbar from '../Components/Navbar'
import Dropdownmenu from '../Components/Dropdownmenu/Dropdownmenu'
function About() {
  return (
    <div>
        <Navbar/>
        <Dropdownmenu/>
        <div className="about-bio">
             <p>Welcome to Ck+ Plus, where your vision becomes our mission. 
            As a premier event planning company, we specialize in crafting unforgettable experiences tailored to your unique needs.
             Whether you're dreaming of a grand wedding, a corporate gala, or an intimate celebration, our dedicated team of experts brings creativity, precision, and passion to every detail. 
             With a commitment to excellence and a personalized approach, Exquisite Events ensures that every occasion is flawlessly executed, leaving you and your guests with memories to cherish for a lifetime. 
             Let us transform your ideas into spectacular realities.</p>
        </div>
       
    </div>
  )
}

export default About
