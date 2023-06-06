import { useState } from "react"
import {FaGithubSquare} from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"
import {MdMail} from "react-icons/md"
import Header from "../Header/index"
import "./index.css"


const Contact=()=>{
    const [messageDetail,setMessageDetail] = useState({
        "email":"",
        "name":"",
        "message" : ""
    })

    const submitForm = (e)=>{
        e.preventDefault()
        setMessageDetail({
            "email":"",
        "name":"",
        "message" : ""
        })

        fetch('http://localhost:3002/send',{
            method: "POST",
            body: JSON.stringify(messageDetail),
            headers : {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(
            (response)=>(response.json())
        ).then((response)=>{
            if(response.status==="success"){
                alert("Message was sent successfully")
            }else if (response.status==="fail"){
                alert("Message was not sent successfully")
            }
        })
    }

    const handleChange = (e)=>{
        const {name,value} = e.target
        setMessageDetail((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
    }
    return(
    <>
    <Header/>
    <div className="contact-container">
        <div className="contact-details-containers">
        <div >
    <h1 className="contact-me">Contact</h1>
    <hr className="break-contact" />
    </div>
    <form   method="POST" onSubmit={submitForm.bind()}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={messageDetail.name} onChange={handleChange}/><br/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"  value={messageDetail.email}  onChange={handleChange}/><br/>
        <label htmlFor="message">Message</label>
        <textarea type="text" rows="8" cols="10" name="message"  value={messageDetail.message}  onChange={handleChange}/>
        <button type="submit" className="send-btn">Send</button>
    </form>
    
    <div className="icons">
            <a  href="https://github.com/Sandeep9041"  target="_blank">
            <FaGithubSquare style={{fontSize:"35px",color:"#25282B",marginRight:"25px"}}/>
            </a>
            <a href="https://www.linkedin.com/in/sandeepsks/"  target="_blank">
            <AiFillLinkedin  style={{fontSize:"38px",color:"#25282B",marginRight:"25px"}}/>
            </a>
            <a href="mailto:sandeepkaur.sk.9041@gmail.com"  target="_blank">
            <MdMail  style={{fontSize:"40px",color:"#25282B",marginBottom:"3px"}}/></a>
    </div>
    </div>
    {/* <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1685462707/Vector_vpqctr.png" alt="yellow-vector" className="yellow-vectors" /> */}
    </div>
    </>
)
}
export default Contact