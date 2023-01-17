import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import Heroimg2 from '../components/Heroimg2';
import Resume from '../components/Resume';

const About = () => {
  return <div>
  <Navbar />
  <Heroimg2 heading="DOWNLOAD RESUME" text="Aspiring Full-Stack Developer"/>
  <Resume />
  <Footer />
  </div>
  
  
}

export default About