import React, { useState } from 'react';
import { Container, Nav, Navbar, Link } from 'react-bootstrap';
import logo from '../../../images/logo.png'
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
                            <img src={logo} width="30" alt="" />
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
                <Navbar variant="light">
                    <Container>
                        <Navbar.Brand href="#home" className="colorGreen"><span className="colorGreen">HOME</span></Navbar.Brand>
                        <Nav className="me-auto">
                            <Navbar.Brand href="#home"><span className="colorGreen">STORE</span></Navbar.Brand>
                            <Navbar.Brand href="#home"><span className="colorGreen">GALLERY</span></Navbar.Brand>
                            <Navbar.Brand href="#features"><span className="colorGreen">ABOUT</span></Navbar.Brand>
                            <Nav.Link href="#pricing"><span className="colorGreen">CONTACT</span></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default MenuBar;