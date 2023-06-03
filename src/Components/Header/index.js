import { Link } from "react-router-dom";
import Popup from 'reactjs-popup'
import {GoThreeBars} from "react-icons/go"
import {ImCross} from "react-icons/im"


import "../Home/index.css"

const Header =()=>(
    <div className="header">
        <Link to="/"  style={{textDecoration:"none"}}>
        <h3 className="nav-logo">Sandeep Kaur</h3>
        </Link>
        <nav>
            <Link to="/about" style={{textDecoration:"none"}}>
            <h3 className="nav-item">About</h3>
            </Link>
            <Link to="/projects" style={{textDecoration:"none"}}>
            <h3 className="nav-item">Projects</h3></Link>
            <Link to="/contact" style={{textDecoration:"none"}}>
            <h3 className="nav-item">Contact</h3></Link>
        </nav>
        <div className="small-container">
                  <Popup
                    modal
                    trigger={
                      <button
                        type="button"
                        className="trigger-button"
                        style={{
                          backgroundColor:"#FFFFFF",

                          border: '0px',
                          marginBottom: '0px',
                        }}
                      >
                        <GoThreeBars
                          style={{
                            fontSize: '25px',
                            marginRight: '10px',
                            backgroundColor:"#FFFFFF",

                          }}
                        />
                      </button>
                    }
                  >
                    {close => (
                      <>
                        <div
                          style={{
                            width: '100vw',
                            height: '100vh',
                            marginTop: '50px',
                            backgroundColor:"#FFFFFF",
                            display:"flex",
                            flexDirection:"column"
                            
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => close()}
                            style={{
                              border: '0px',
                              textAlign: 'right',
                              marginBottom: '-1px',
                              padding: '15px',
                              width: '100%',
                              backgroundColor:"#ffffff",

                            
                            }}
                          >
                            <ImCross
                              style={{
                                fontSize: '17px',

                              }}
                            />
                          </button>
                          <ul style={{padding: '0px', marginTop: '0px'}}>
                            <Link
                              to="/"
                              style={{textDecoration: 'none', color: '#ffffff'}}
                            >
                              <button
                                type="button"
                                className="btn"
                              >
                               
                                <h3>
                                  Home
                                </h3>
                              </button>
                            </Link>
                            <Link
                              to="/about"
                              style={{textDecoration: 'none', color: '#ffffff'}}
                            >
                              <button
                                type="button"
                                className="btn"

                              >
                                
                                <h3>
                                  About
                                </h3>
                              </button>
                            </Link>
                            <Link
                              to="/projects"
                              style={{textDecoration: 'none', color: '#ffffff'}}
                            >
                              <button
                                type="button"
                                className="btn"

                              >
                                
                                <h3>
                                  Projects
                                </h3>
                              </button>
                            </Link>
                            <Link
                              to="/contact"
                              style={{textDecoration: 'none', color: '#ffffff'}}
                            >
                              <button
                                type="button"
                                className="btn"
 
                              >
                          
                                <h3>
                                Contact
                                </h3>
                              </button>
                            </Link>
                          </ul>
                        </div>
                      </>
                    )}
                  </Popup>
                </div>

    </div>
)

export default Header