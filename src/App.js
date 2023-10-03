import React from 'react';
import {Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./Components/Home/index.js"
// import Projects from "./Components/Projects";
import Contact from "./Components/Contact/index.js";
import About from "./Components/About/index.js";
import Project from "./Components/Project/project.js";


const App = ()=>(
  <Routes >
    <Route path="/" element={<Home/>}/>
    <Route path="/projects" element={<Project/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/About" element={<About/>}/>
    {/* <Route path="/project" element={<Project/>}/> */}
  </Routes>
)

export default App;
