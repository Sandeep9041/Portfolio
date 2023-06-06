import {Link} from "react-router-dom" 
import "./index.css"
import Header from "../Header/index"

const Home = () => (
<>
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
                <a href="https://www.linkedin.com/in/sandeepsks/" style={{textDecoration:"none",color:"#25282B"}} target="_blank">                Linkdin
</a>
            </button>
            </div> 
        </div> 
        <div className="img orders">
        <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1685425109/woman-working-using-laptop-flat-design_1308-96714-removebg-preview_eerjrl.png" alt="bg" className="yellow-img"/>

</div>

    </div>
    </>
)

export default Home