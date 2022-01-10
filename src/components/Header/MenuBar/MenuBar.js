import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const MenuBar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
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
    );
};

export default MenuBar;