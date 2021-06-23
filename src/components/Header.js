import '../css/Header.css';
import '../App.css';
import {React, Component} from "react";

import { Link } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";
import { VscBell, VscGear, VscAccount } from "react-icons/vsc";
import Dropdown from 'react-bootstrap/Dropdown'

/*Icon :: https://react-icons.github.io/react-icons/search?q=setting */

class Header extends Component{
    
    constructor(props) {
        super(props)
    }

    /* Todo:: Needed to fix BUG !! */
    logoutHandler =(e) => {
        this.props.history.push('/Login')
    }
    
    /* Todo:: Search Button Click Event */
    SearchBtnClick(){
        
    }

    render(){
        if(window.location.pathname === '/Login' || window.location.pathname === '/signup' || 
        window.location.pathname === '/privacyStatement' || window.location.pathname === '/termsAndService' ||
        window.location.pathname === '/forgotPassword' || window.location.pathname === '/resetPassword' ||
        window.location.pathname === '/renderOpenMSG') return null;
        return (
            <header className="Header">
                <div className="Navbar">
                    <div className="leftSide">
                        <div className="inner text-white pl-4">
                            <Link to= '/' className="links"><h2>UNIVERSAL RX</h2></Link>
                        </div>
                    </div>
                    <div className="rightSide">
                        <div className="inner">
                            <div className="navbar searchbar">
                                    <input type="text" placeholder="Search by Patient"/><button type="submit" onClick={this.SearchBtnClick}><BiSearch /></button>
                            </div>
                            
                            <Dropdown>
                                <Dropdown.Toggle className="navbar alarm">
                                <VscBell color="white" size="24"/>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">message</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            
                            {/* Setting is not needed for the user portal */}
                            {/*<div className="navbar setting">
                                <div onClick={this.SettingBtnClick}><VscGear color="white" size="24"/></div>
                            </div>*/}
                            
                            <Dropdown>
                                <Dropdown.Toggle className="navbar UserDropdown">
                                    <VscAccount color="white" size="24"/>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/myinfo">Edit My Profile</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#" onClick={e=>this.logoutHandler(e)}>Log out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>  
                </div>
                
                <nav className="Navbar2">
                    <Link to= '/myCases' className="links">My Cases</Link>
                    <Link to= '/newCase' className="links">New Case</Link>
                    <Link to= '/' className="links">Booking</Link>
                    <Link to= '/myAccount' className="links">My Info</Link>
                    <Link to= '/invoices' className="links">View Invoices</Link>
                    <a href="https://uniortholab.com/us/" target="_blank" rel="noreferrer" className="links">Go To UniversalLab.com</a>
                    <Link to= '/' className="links">Need More Help?</Link>

                    {/*<Link to= '/SignUp' className="links">SignUp</Link>*/}
                </nav>
            </header>    
        );
    }
}

export default Header;
