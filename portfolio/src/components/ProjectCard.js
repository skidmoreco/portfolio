import "./ProjectCardStyles.css";
import Jate from '../assets/jate.png';

import React from 'react'
import { NavLink } from "react-router-dom";

const ProjectCard = () => {
  return (<div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
        <div className="project-card">
            <img src={Jate} alt="jate"/>
            <h2 className="project-title">J.A.T.E</h2>
            <div className="pro-details">
                <p>Created a text editor that runs in the browser. The app is a single-page application that meets the PWA criteria. Implemented methods for getting and storing data to an IndexedDB database. The app also fully functions while offline!
                </p>
                <div className="pro-btns">
                    <NavLink to="url.com" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default ProjectCard