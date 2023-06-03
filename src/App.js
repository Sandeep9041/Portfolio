import {Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./Components/Home"
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import About from "./Components/About";

const App = ()=>(
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/About" element={<About/>}/>
  </Routes>
)

export default App;
