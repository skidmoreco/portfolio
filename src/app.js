import React from "react";
import "./index.css";
import Portfolio from "./routes/Portfolio";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";


function App() {
    return (
        <>
        <Routes>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/project" element={<Project />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
        </>
    )
}

export default App;