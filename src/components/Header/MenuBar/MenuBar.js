import React, { useState } from 'react';
import { Container, Nav, Navbar, Link } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import logo1 from '../../../images/logo-1.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './MenuBar.css';


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
                    <Container>
                        <Nav.Link href="#home" className="colorGreen"><span className="colorGreen">HOME</span></Nav.Link>
                        <Nav.Link href="#home"><span className="colorGreen">SERVICE</span></Nav.Link>
                        <Nav.Link href="#home"><span className="colorGreen">GALLERY</span></Nav.Link>
                        <Nav.Link href="#features"><span className="colorGreen">ABOUT US</span></Nav.Link>
                        <Nav.Link href="#features"><span className="colorGreen">OUR TEAM</span></Nav.Link>
                        <Nav.Link href="#pricing"><span className="colorGreen">CONTACT</span></Nav.Link>
                        <Nav className="ms-auto">
                            <Nav.Link href="#home"><span className="colorGreen">LOGIN</span></Nav.Link>
                            <Nav.Link href="#home"><span className="colorGreen">SIGN UP</span></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default MenuBar;