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
                    <div className="col-md-2">
                        <img src={aboutUs} alt="" />
                    </div>
                    <div className="col-md-5">dgdg
                        {/* <div className="row">
                            <div className="col-md-12">
                                <h1><i class="fas fa-users"></i></h1>
                                jhgjghj
                            </div>
                        </div> */}
                    </div>
                    <div className="col-md-5">
ffgdf
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;