import Slider from 'react-slick'

 import 'slick-carousel/slick/slick.css'
 import 'slick-carousel/slick/slick-theme.css'

import Header from "../Header/index"

import "./index.css"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", backgroundColor: "#FDC435",width:"21px",height:"21px",borderRadius:"100%" }}
        onClick={onClick}
      />
    );
  }


const About =()=>{
    const settings = {
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SampleNextArrow />
      }
      const settings2 = {
        dots: true,
        slidesToShow:2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SampleNextArrow />
      }
return(
    <>
    <Header/>
    <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",height:"110vh"}}>
    <div className="about-container">
        <div className="about">
          <div className='about-break'>
            <h2 className="about-me">About me</h2>
            <hr className='break' />
            </div>
        <p className='about-me-content'>Hi, my name is Sandeep Kaur.I have done graduation in Bsc Agriculture in 2019.Later, I joined NXTWave Full Stack Development program.I have acquired strong technical skills in web development,with proficiency in HTML, CSS, JavaScript and React.

        </p>
          <a href="https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/ccbp_prod/media/resume_generated/Sandeep_2023-05-21-220654.pdf" style={{textDecoration:"none"}}>
          <button type="button" className='button button1'>       
            Resume
            </button>
            </a>
        </div>
    <div className="bg">
    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1685441313/young-woman-white_25030-39527-removebg-preview_amj4e9.png" alt="about" />
    </div>

   
    </div>
    <div style={{width:"80%"}}>
    <h1 className="my-skills">My Skills</h1>
    <hr className="break" />
    <div className="slider-container">
      <Slider className='slider-lg' {...settings}>
        <div className='slide-item'>
          <img className='skill-img' src="https://cdn-icons-png.flaticon.com/512/919/919827.png?w=740&t=st=1685445692~exp=1685446292~hmac=3e0d3f5cbdbed2aaa81e69fd2596e3bcb5cf928b1013d7744baa0ad01a1808b2" alt="logo"/>
        </div>
        <div className='slide-item'>
        <img className='skill-img'  src="https://cdn-icons-png.flaticon.com/512/919/919826.png?w=740&t=st=1685445819~exp=1685446419~hmac=60ed7422cf33e03174b7e35e42d57cb163c7ecf9da01524d13e80cd24db9a8d8" alt="logo"/>
        </div>
        <div className='slide-item'>
        <img className='skill-img'  src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png" alt="logo"/>
        </div>
        <div className='slide-item'>
        <img className='skill-img'  src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png?w=740&t=st=1685445801~exp=1685446401~hmac=ccbee190553f5f12d113448ccfaa5db4277c4ed55213159faf9e0039729b090b" alt="logo"/>
        </div>
        <div className='slide-item'>
        <img className='skill-img'  src="https://cdn-icons-png.flaticon.com/512/919/919825.png?w=740&t=st=1685450167~exp=1685450767~hmac=d8a315d564822e66786a096f1d4ecde3c12df987b23f18b1a35aa3e727c56183" alt="logo"/>
        </div>
        <div style={{backgroundColor:"red"}}>
        <img className='skill-img'  src="https://www.vectorlogo.zone/logos/sqlite/sqlite-ar21.svg" alt="logo" style={{width:"95px",height:"95px"}}/>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png?w=740&t=st=1685450352~exp=1685450952~hmac=9bbc9971a97ebd4f439921f9c0f6ba5355bf395c5b9658be49fc6e2710a93a7d"
          className='skill-img' alt="logo"/>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/423/423066.png?w=740&t=st=1685450694~exp=1685451294~hmac=ff76a74f9c007fdc938b9e31c6cdaf7c11f36c6f62a52c2ac2876f2419719e86"
          className='skill-img' alt='logo'  />
        </div>
      </Slider>
      <Slider className='slider-sm'{...settings2}>
        <div className='slide-item'>
          <img className='skill-img' src="https://cdn-icons-png.flaticon.com/512/919/919827.png?w=740&t=st=1685445692~exp=1685446292~hmac=3e0d3f5cbdbed2aaa81e69fd2596e3bcb5cf928b1013d7744baa0ad01a1808b2" alt="logo"/>
        </div>
        <div className='slide-item'>
        <img className='skill-img'  src="https://cdn-icons-png.flaticon.com/512/919/919826.png?w=740&t=st=1685445819~exp=1685446419~hmac=60ed7422cf33e03174b7e35e42d57cb163c7ecf9da01524d13e80cd24db9a8d8" alt="logo"/>
        </div>
        <div className='slide-item'>
        <img className='skill-img'  src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png" alt="logo"/>
        </div>
        <div className='slide-item'>
        <img className='skill-img'  src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png?w=740&t=st=1685445801~exp=1685446401~hmac=ccbee190553f5f12d113448ccfaa5db4277c4ed55213159faf9e0039729b090b" alt="logo"/>
        </div>
        <div className='slide-item'>
        <img className='skill-img'  src="https://cdn-icons-png.flaticon.com/512/919/919825.png?w=740&t=st=1685450167~exp=1685450767~hmac=d8a315d564822e66786a096f1d4ecde3c12df987b23f18b1a35aa3e727c56183" alt="logo"/>
        </div>
        <div style={{backgroundColor:"red"}}>
        <img className='skill-img'  src="https://www.vectorlogo.zone/logos/sqlite/sqlite-ar21.svg" alt="logo" style={{width:"95px",height:"95px"}}/>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png?w=740&t=st=1685450352~exp=1685450952~hmac=9bbc9971a97ebd4f439921f9c0f6ba5355bf395c5b9658be49fc6e2710a93a7d"
          className='skill-img' alt="logo"/>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/423/423066.png?w=740&t=st=1685450694~exp=1685451294~hmac=ff76a74f9c007fdc938b9e31c6cdaf7c11f36c6f62a52c2ac2876f2419719e86"
          className='skill-img' alt='logo'  />
        </div>
      </Slider>
    </div>
      </div>
    </div>
    </>
)
}
export default About