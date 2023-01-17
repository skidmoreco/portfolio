import React from 'react';
import CV from '../assets/RESUME_main.pdf';


const Resume = () => {
  return (
    <div className='resume'>
        <a href={CV} link className='resume-btn'>Download Resume</a>
        {/* <a className='button' href='../assets/RESUME.pdf' download={}>Download Resume</a> */}
    </div>
  )
}

export default Resume