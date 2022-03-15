import React from 'react';
import './Assessment.css';

const Assessment = () => {
    return (
        <div className="py-5 team-container">
            <div className="container">
                <div className="main-section">
                    <div className="section-title">
                        <h1 className="text-center py-4">Our <span className="text-color">Assessment</span></h1>
                    </div>
                </div>
                <p className="text-center pt-5 font">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laudantium unde, dolores est <br /> corporis, sunt deserunt sequi.</p>
                <div className="row gy-4 text-center">
                    <div className="col-4">
                        <div class="p-3 p-5 single-assessment">
                            <h1><i className="far fa-heart text-color"></i></h1>
                            <h4>Love With Deal</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                            <a href="#" className="garden-btn move-eff mt"><span>Details</span></a>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="p-3 single-assessment p-5">
                            <h1><i class="far fa-handshake text-color"></i></h1>
                            <h4>We Are Professional</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                            <a href="#" className="garden-btn move-eff mt"><span>Details</span></a>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="p-3 single-assessment p-5">
                            <h1><i class="fas fa-car text-color"></i></h1>
                            <h4>Best Quality Services</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                            <a href="#" className="garden-btn move-eff mt"><span>Details</span></a>
                        </div>
                    </div>
                    {/* <div className="col-md-4 single-assessment">
                        <h1><i className="far fa-heart text-color"></i></h1>
                        <h3>Love With Deal</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                        <a href="#" className="garden-btn move-eff mt"><span>Details</span></a>
                    </div>
                    <div className="col-md-4 single-assessment">
                        <h1><i class="far fa-handshake text-color"></i></h1>
                        <h3>
                            We Are Professional</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                        <a href="#" className="garden-btn move-eff mt"><span>Details</span></a>
                    </div>
                    <div className="col-md-4 single-assessment">
                        <h1><i class="fas fa-car text-color"></i></h1>
                        <h3>Best Quality Services</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                        <a href="#" className="garden-btn move-eff mt"><span>Details</span></a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Assessment;