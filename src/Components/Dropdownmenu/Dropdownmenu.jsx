import React, { useState } from 'react'
import './Dropdownmenu.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Dropit(){
    return(
        <div className="mobile-menu">
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
    )
}
function Dropdownmenu() {
    const[showMenu, setShowMenu] = useState(false);

    const toggleMenu=()=>{
        setShowMenu(!showMenu);
    }
  return (
    <div className='Drop-menu'>
        <div className="mobile">
            <button onClick={toggleMenu} className="tap-me">
                <MenuIcon/>
            </button>
            {showMenu && <Dropit/>}
        </div>
      
    </div>
  )
}

export default Dropdownmenu
