import "./Styling/ProjectCardStyles.css";
import React from 'react';


const ProjectCard = ({ imgsrc, title, text, liveLink, sourceLink}) => {
  return (
  <div className="project-card">
      <img src={imgsrc} alt={title}/>
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
          <p>{text}</p>
          <div className="pro-btns">
              <a className="btn" href={liveLink}>Live</a>
              <a className="btn" href={sourceLink}>Source</a>
          </div>
      </div>
  </div>
  )
}

export default ProjectCard