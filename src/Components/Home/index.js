import React from 'react';
import {Link} from "react-router-dom"
import Lottie from "lottie-react";
import Girl from "../img/Girl.json"

import "./index.css"
import Header from "../Header/index.js"

const Home = () => (
<div className='home'>
<Header/>
    <div className="home-container">
         <div className="content-container">
            <h2 className="profession">FRONTEND DEVELOPER</h2>
            <h1 className="name">Hello, my name is Sandeep Kaur</h1>
            <p>I am Frontend developer.I like to code things from scratch and I value simple code structure, clean design patterns.
<br/>   <span  className="neon" >I am open to work !</span></p>
       <div className="buttons">
       <Link to="/projects">
        <button className="button button1">
            Projects
            </button>
            </Link>

            <button className="button button2">
                <a href="https://www.linkedin.com/in/sandeepsks/"  rel="noopener noreferrer" style={{textDecoration:"none",color:"#25282B"}} target="_blank">                Linkdin
</a>
            </button>
            </div> 
        </div> 
        <div className="img orders">
            {/* <Lottie animationData={Animation} className='girl' /> */}
            {/* <Lottie animationData={Girl} className='girl' /> */}

        <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1685425109/woman-working-using-laptop-flat-design_1308-96714-removebg-preview_eerjrl.png" alt="bg" className="yellow-img"/>

</div>

    </div>
    </div>
)

export default Home