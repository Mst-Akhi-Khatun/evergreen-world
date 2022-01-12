import React from 'react';
import './Service.css';
import mainService from '../../images/Service/mainService.png';
import service from '../../images/Service/service.png';
import service1 from '../../images/Service/service1.png';
import service2 from '../../images/Service/service2.png';
import service3 from '../../images/Service/service3.png';
import service4 from '../../images/Service/service4.png';
import service5 from '../../images/Service/service5.png';
import service6 from '../../images/Service/service6.png';

const Service = () => {
    return (
        <div className="service-container container py-5">
            <div className="main-section">
                <div className="text-center">
                    <h1 className="text-center pt-4">Our <span className="text-color">Service</span></h1>
                    <img src={service} alt="" />
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-2">
                            <img src={service1} alt="" />
                        </div>
                        <div className="col-md-10">
                            <h4>Land Scaping Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectet micongue kladipiscing hlelit. Donec ut diam pulvinar, lorem elits bibendum tellus quis, sodales tortor.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <img src={service2} alt="" />
                        </div>
                        <div className="col-md-10">
                            <h4>Land Scaping Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectet micongue kladipiscing hlelit. Donec ut diam pulvinar, lorem elits bibendum tellus quis, sodales tortor.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <img src={service3} alt="" />
                        </div>
                        <div className="col-md-10">
                            <h4>Land Scaping Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectet micongue kladipiscing hlelit. Donec ut diam pulvinar, lorem elits bibendum tellus quis, sodales tortor.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 pt-5">
                    <img src={mainService} alt="" />
                </div>
                <div className="col-md-4">
                    <div className="row">

                        <div className="col-md-10">
                            <h4>Land Scaping Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectet micongue kladipiscing hlelit. Donec ut diam pulvinar, lorem elits bibendum tellus quis, sodales tortor.</p>
                        </div>
                        <div className="col-md-2 d-flex align-items-center">
                            <div>
                                <img src={service1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-10">
                            <h4>Land Scaping Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectet micongue kladipiscing hlelit. Donec ut diam pulvinar, lorem elits bibendum tellus quis, sodales tortor.</p>
                        </div>
                        <div className="col-md-2">
                            <img src={service2} alt="" />
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-10">
                            <h4>Land Scaping Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectet micongue kladipiscing hlelit. Donec ut diam pulvinar, lorem elits bibendum tellus quis, sodales tortor.</p>
                        </div>
                        <div className="col-md-2">
                            <img src={service3} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;