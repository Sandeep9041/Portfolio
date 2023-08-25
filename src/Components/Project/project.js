import React, { Component }  from 'react';

import Header from "../Header/index"
import "./project.css"

const Project =()=>(
    <div className='project'>
    <Header/>
    <div className="heading-container">
        <h1 className="projects-heading">Projects</h1>
        <hr className="project-break"/>
        </div>


    <div className='main'>

        <div className='card card-1'>
            <div className='content'>
                <h5>YABN Money Balancing</h5>
                <p>Created this website using ReactJS and Lottie animations.</p>
                <p style={{marginTop:"0px"}}>Technologies Used: React JS, JavaScript, CSS, Styled Components, Lottie Files, Fade Library</p>
                <a href="https://effortless-mousse-0d3830.netlify.app/" className="project-link">View Project</a>
            </div>
        </div>
        <div className='card card-2'>
            <div className='content'>
                <h5> Jobby App</h5>
                <p> Implemented Jobby App where users can  see a list of jobs with
                        search by Job title, filters based on Salary range and Employment type, etc.Implemented different pages like Login, Home, Jobs, Job item details.</p>
                <p>Technologies Used: React JS, JavaScript, CSS, Routing, REST API</p>
                <a href="https://appjob.ccbp.tech/login" className="project-link">View Project</a>
            </div>
        </div>
        <div className='card card-3'>
            <div className='content'>
                <h5>  Nxt Trendz (ECommerce Clone - Amazon, Flipkart)</h5>
                <p>Implemented Nxt Trendz application which is a clone for ECommerce applications
                        like Amazon, Flipkart where users can login and can see list of products with
                        search, filters, sort by, etc..</p>
                <p>Technologies Used: React JS, JavaScript, CSS, Authorization, Authentication, REST API</p>
                <a href="https://ecomms.ccbp.tech/" className="project-link">View Project</a>
            </div>
        </div>
        <div className='card card-4'>
            <div className='content'>
                <h5>Nxt Watch</h5>
                <p>Built the Nxt Watch application, modelled after YouTube, enabling users to log in,
                        explore video categories such as Trending and Gaming, access saved videos, and
                        search for specific content while adjusting the interface theme.</p>
                <p>Technologies Used: React JS, JavaScript, CSS, Routing, REST API</p>
                <a href="https://ntube.ccbp.tech/" className="project-link">View Project</a>
            </div>
        </div>
        <div className='card card-5'>
            <div className='content'>
                <h5>Rock Scissors Paper Game</h5>
                <p>Built a simple game using React, which includes a rule book which will guide you how to play.</p>
                <p>Technologies Used: React JS, JavaScript, CSS</p>
                <a href="https://scissorsrock.ccbp.tech/" className="project-link">View Project</a>
            </div>
        </div>
    </div>
     </div>
)



export default Project