import React from 'react';
import './Footer.css';
import logo from '../../images/logo-1.png';

const Footer = () => {
    return (
        <div>
            <footer className="container-fluid footer-main p-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className="image" src={logo} alt="" width="180px" />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <p>About Online Hospital</p>
                                <p>Read our blog</p>
                                <p>Sign up to Appointment</p>
                                <p>Add your Hospital</p>
                            </div>
                            <div className="col-md-6">
                                <p>Get help</p>
                                <p>Read FAQs</p>
                                <p>View all cities</p>
                                <p>Hospital near me</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-4">
                                <p>Privacy policy</p>
                            </div>
                            <div className="col-md-4">
                                <p>Terms of Use</p>
                            </div>
                            <div className="col-md-4">
                                <p>Services</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <p className="text-end">Copyright &copy; 2021, Made By Akhi Khatun</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;