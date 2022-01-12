import React from 'react';
import './Service.css';
import store1 from '../../images/Store/store-1.jpg';
import store2 from '../../images/Store/store-2.jpg';
import store3 from '../../images/Store/store-3.jpg';
import store4 from '../../images/Store/store-4.jpg';



const Service = () => {
    return (
        <div className="service-container">
            <div className="main-section">
                <div className="section-title">
                    <h1 className="text-center py-4">Our <span className="text-color">Service</span></h1>
                </div>
            </div>
            <p className="text-center pt-5 font">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laudantium unde, dolores est <br /> corporis, sunt deserunt sequi.</p>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 pb-3">
                    <div className="col">
                        <div className="h-100 parent">
                            <div className="card-body single-service text-center">
                                <h3 className="card-title text-color">Card title</h3>
                                <h2><i className="fas fa-trash-alt text-color"></i></h2>
                                <p className="card-text">Lawn Clean
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="h-100">
                            <div className="card-body text-center">
                                <h3 className="card-title text-color">Card title</h3>
                                <h2><i className="fas fa-trash-alt text-color"></i></h2>
                                <p className="card-text">Lawn Clean
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="h-100">
                            <div className="card-body text-center">
                                <h3 className="card-title text-color">Card title</h3>
                                <h2><i className="fas fa-trash-alt text-color"></i></h2>
                                <p className="card-text">Lawn Clean
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="h-100">
                            <div className="card-body text-center">
                                <h3 className="card-title text-color">Card title</h3>
                                <h2><i className="fas fa-trash-alt text-color"></i></h2>
                                <p className="card-text">Lawn Clean
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="h-100">
                            <div className="card-body text-center">
                                <h3 className="card-title text-color">Card title</h3>
                                <h2><i className="fas fa-trash-alt text-color"></i></h2>
                                <p className="card-text">Lawn Clean
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="h-100">
                            <div className="card-body text-center">
                                <h3 className="card-title text-color">Card title</h3>
                                <h2><i className="fas fa-trash-alt text-color"></i></h2>
                                <p className="card-text pb-5">Lawn Clean
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;