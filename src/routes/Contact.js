import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import Heroimg2 from '../components/Heroimg2';
import ContactMe from '../components/ContactMe';

const Contact = () => {
  return ( 
  <div>
    <Navbar />
    <Heroimg2 heading="CONTACT." text="Find me here!"/>
    <ContactMe />
    <Footer />
  </div>
  )
}

export default Contact