import React from "react";
import "./index.css";
import Portfolio from "./routes/Portfolio";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import CV from './assets/RESUME_main.pdf';


function App() {
    return (
        <>
        <Routes>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/project" element={<Project />}/>
            <Route href={CV} link className='resume-btn'>Download Resume</Route>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
        </>
    )
}

export default App;