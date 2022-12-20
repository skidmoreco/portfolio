import "./Styling/ProjectCardStyles.css";
import ProjectCardData from "./WordCardData";
import ProjectCard from './ProjectCard.js'
import React from 'react'


const Work = () => {
  return (<div className="work-container">
    <div className="project-container">
    <ProjectCard {...ProjectCardData[0]}/>
    <ProjectCard {...ProjectCardData[1]}/>
    <ProjectCard {...ProjectCardData[2]}/>
    <ProjectCard {...ProjectCardData[3]}/>
    </div>
  </div>
  )
}

export default Work