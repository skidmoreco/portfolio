import "./Styling/navbarStyles.css"

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import CV from '../assets/RESUME_main.pdf'

const Navbar = () => {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
        setColor(true);
    } else {
        setColor(false)
    }
  };

  window.addEventListener("scroll", changeColor);
  
  
  
  
  
  
  
    return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to={"/Portfolio"}>
            <h1>skidmoreco.</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/project">Projects</Link>
            </li>
            <li>
                <a href={CV} link className='resume-btn'>Resume</a>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }
            }/>)}
        </div>
    </div>
  )
}

export default Navbar