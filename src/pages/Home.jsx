import React from 'react'
import '../styles/Home.css'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div>
      <h1>This is the Home Page</h1>
      
      <Link to="/about">About</Link>
    </div>
  )
}

export default Home
