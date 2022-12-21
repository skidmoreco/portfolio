import "./Styling/HeroImgStyles.css";

import IntroImg from "../assets/headshot.jpg";
import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
        <p>Hi! My Name's Corey.</p>
        <h1>Welcome to my Portfolio!</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
  </div>
  );
};

export default HeroImg;