import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import About from './pages/About';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero';
import Dropdownmenu from './Components/Dropdownmenu/Dropdownmenu';
function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <Dropdownmenu/>
    </>
  )
}

export default App
