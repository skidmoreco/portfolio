import "./Styling/FooterStyles.css";

import React from 'react';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    <div>
                        <p>Dayton, OH</p>
                        <p>USA</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    937-710-2602 </h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    skidmoreco@gmail.com </h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me!</h4>
                <p>Full-Stack Web Developer seeking an entry level position. Bringing skills sets in both Front-End & Back-End Technology, utilizing JavaScript, Express & NodeJS, and in Front-End technology, utilizing React. MaterialUI & Bootstrap, to craft applications for a clean, enjoyable & interactive experience.</p>
                <div className="social">
                <FaGithub
                    size={30}
                    style={{ color: "#fff",
                    marginRight: "1rem" }}   
                />
                <FaLinkedin
                    size={30}
                    style={{ color: "#fff",
                    marginRight: "1rem" }}   
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer