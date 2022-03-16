import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import logo1 from '../../../images/logo-1.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './MenuBar.css';
import { Link } from 'react-router-dom';


const MenuBar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={logo1} alt="" />
                        </Navbar.Brand>
                        <Nav className="ms-auto">
                            <Navbar.Brand href="#home">
                                <DatePicker
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                />
                            </Navbar.Brand>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Navbar variant="light" className="background">
                    <Container className="menu">
                        <Link to="/home" className="colorGreen"><span className="colorGreen">HOME</span></Link>
                        <Link to="/service"><span className="colorGreen">SERVICE</span></Link>
                        <Link to="/home"><span className="colorGreen">GALLERY</span></Link>
                        <Link to="/home"><span className="colorGreen">ABOUT US</span></Link>
                        <Link to="/home"><span className="colorGreen">OUR TEAM</span></Link>
                        <Link to="/contact"><span className="colorGreen">CONTACT</span></Link>
                        <Link to="/dashboard"><span className="colorGreen">DASHBOARD</span></Link>
                        <Nav className="ms-auto">
                            <Link to="/login"><span className="colorGreen">LOGIN</span></Link>
                            <Link to="/register"><span className="colorGreen">SIGN UP</span></Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default MenuBar;