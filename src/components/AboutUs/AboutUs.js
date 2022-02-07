import React from 'react';
import aboutUs from '../../images/AbouUs/aboutUs.png';

const AboutUs = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="main-section">
                    <div className="section-title">
                        <h1 className="text-center y-4">About  <span className="text-color">Gardenor</span></h1>
                    </div>
                </div>
                <p className="text-center pt-5 font">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laudantium unde, dolores est <br /> corporis, sunt deserunt sequi.</p>
                <div className="row">
                    <div className="col-md-4">
                        <img src={aboutUs} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-4 pt-5">
                        <div className="">
                            <h1 className="text-color"><i class="fas fa-users"></i></h1>
                            <h3 className="text-color">Who We Are</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ipsam impedit iusto corporis, voluptate repellat, incidunt blanditiis dignissimos excepturi minus voluptates deleniti sed.</p>
                        </div>
                        <div className="">
                            <h1 className="text-color"><i class="fas fa-check-circle"></i></h1>
                            <h3 className="text-color">Our Mission</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ipsam impedit iusto corporis, voluptate repellat, incidunt blanditiis dignissimos excepturi minus voluptates deleniti sed.</p>
                        </div>
                    </div>
                    <div className="col-md-4 pt-5">
                        <div className="">
                            <h1 className="text-color"><i class="fas fa-unlink"></i></h1>
                            <h3 className="text-color">Our Value</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ipsam impedit iusto corporis, voluptate repellat, incidunt blanditiis dignissimos excepturi minus voluptates deleniti sed.</p>
                        </div>
                        <div className="">
                            <h1 className="text-color"><i class="fab fa-gg-circle"></i></h1>
                            <h3 className="text-color">Our Vision</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ipsam impedit iusto corporis, voluptate repellat, incidunt blanditiis dignissimos excepturi minus voluptates deleniti sed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;