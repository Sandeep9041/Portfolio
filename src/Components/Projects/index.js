import Header from "../Header/index"
import "./index.css"


const Projects =()=>(
    <>
    <Header/>
    <div className="projects-container">
        <div className="heading-container">
        <h1 className="projects-heading">Projects</h1>
        <hr className="project-break"/>
        </div>

        <div className="projects-list">
        <div className="project-item">
            <div className="project-image-container-left">
                        <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1688449638/img_d3mx9y.png" alt="project" className="project-image-left"/>
                    </div>
                    <div className="project-content">
                        <h2 className="project-content-heading">
                        Money Balancing
                        </h2>
                        <p className="project-content-para">
                            YABN Money Balancing app build using technologies such as ReactJS and Lottie Animations.
                        </p>
                        <p className="technologies">Technologies used:&nbsp;&nbsp;<span className="technologies-content-para">React JS, JavaScript, CSS, Styled Components, Lottie Files</span>
                        </p>
                        <a href="https://effortless-mousse-0d3830.netlify.app/" target="_blank" rel="noreferrer" className="project-link">View Project</a>
                    </div>
                   
            </div>
            <div className="project-item">
                    <div className="project-content-left">
                        <h2 className="project-content-heading">
                            Jobby App
                        </h2>
                        <p className="project-content-para">
                        Implemented Jobby App where users can  see a list of jobs with
                        search by Job title, filters based on Salary range and Employment type, etc.Implemented different pages like Login, Home, Jobs, Job item details.
                        </p>
                        <p className="technologies">Technologies used:&nbsp;&nbsp;<span className="technologies-content-para">React JS, JavaScript, CSS, Routing, REST API</span>
                        </p>
                        <a href="https://appjob.ccbp.tech/login" target="_blank" rel="noreferrer" className="project-link">View Project</a>
                    </div>
                    <div className="project-image-container order">
                        <img src="https://assets.ccbp.in/frontend/content/react-js/jobby-app-home-lg-output.png" alt="project" className="project-image"/>
                    </div>
            </div>
            <div className="project-item">
            <div className="project-image-container-left">
                        <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-login-output.png" alt="project" className="project-image-left"/>
                    </div>
                    <div className="project-content">
                        <h2 className="project-content-heading">
                        Nxt Trendz (ECommerce Clone - Amazon, Flipkart)
                        </h2>
                        <p className="project-content-para">
                        Implemented Nxt Trendz application which is a clone for ECommerce applications
                        like Amazon, Flipkart where users can login and can see list of products with
                        search, filters, sort by, etc..
                        </p>
                        <p className="technologies">Technologies used:&nbsp;&nbsp;<span className="technologies-content-para">React JS, JavaScript, CSS, Authorization, Authentication, REST API</span>
                        </p>
                        <a href="https://ecomms.ccbp.tech/" target="_blank" rel="noreferrer" className="project-link">View Project</a>
                    </div>
                   
            </div>
            <div className="project-item">
                    <div className="project-content">
                        <h2 className="project-content-heading">
                            Nxt Watch
                        </h2>
                        <p className="project-content-para">
                        Built the Nxt Watch application, modelled after YouTube, enabling users to log in,
                        explore video categories such as Trending and Gaming, access saved videos, and
                        search for specific content while adjusting the interface theme.
                        </p>
                        <p className="technologies">Technologies used:&nbsp;&nbsp;<span className="technologies-content-para">React JS, JavaScript, CSS, Routing, REST API</span>
                        </p>
                        <a href="https://ntube.ccbp.tech/" target="_blank" rel="noreferrer" className="project-link">View Project</a>
                    </div>
                    <div className="project-image-container order">
                        <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-success-light-theme-lg-output.png" alt="project" className="project-image"/>
                    </div>
            </div>
            <div className="project-item">
            <div className="project-image-container-left">
                        <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1685866860/Screenshot_12_vpx7hp.png" alt="project" className="project-image-left"/>
                    </div>
                    <div className="project-content">
                        <h2 className="project-content-heading">
                        Food Munch 
                        </h2>
                        <p className="project-content-para">
                        Developed a responsive website for Food Store where users can see a list of food
                        items, detailed information about a food item, offer.
                        </p>
                        <p className="technologies">Technologies used:&nbsp;&nbsp;<span className="technologies-content-para">: HTML, CSS, Bootstrap</span>
                        </p>
                        <a href="https://sandeepsaini.ccbp.tech/" target="_blank" rel="noreferrer" className="project-link">View Project</a>
                     </div>
                   
            </div>
            <div className="project-item">
                    <div className="project-content">
                        <h2 className="project-content-heading">
                            Rock Scissors Paper Game
                        </h2>
                        <p className="project-content-para">
                        Built a simple game using React, which includes a rule book which will guide you how to play. 
                        </p>
                        <p className="technologies">Technologies used:&nbsp;&nbsp;<span className="technologies-content-para">React JS, JavaScript, CSS</span>
                        </p>
                        <a href="https://scissorsrock.ccbp.tech/" target="_blank" rel="noreferrer" className="project-link">View Project</a>
                    </div>
                    <div className="project-image-container order">
                        <img src="https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-playing-output.png" alt="project" className="project-image"/>
                    </div>
            </div>
        </div>
    </div>
    </>
)



export default Projects