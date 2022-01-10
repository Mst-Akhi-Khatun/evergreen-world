import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../../images/Banner/banner.png';
import 'animate.css';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-section">
            <div className="banner-bg py-3 mt-5" style={{ minHeight: "490px" }}>
                <div className="container py-4">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 animate__animated animate__backInLeft">
                            <h1 className="text-uppercase fw-bold mt-4">
                                plants for healthy
                            </h1>
                            <h5 className="w-75 my-4">
                                “If you cut a tree, you kill a life. If you save a tree, you save a life. If you plant a tree, you plant a life.” - Trees make the environment cleaner and provide us with oxygen.
                            </h5>
                            <Link to="/allProducts">
                                <button className="btn regular-btn py-2 colorGreen">Shop Now</button>
                            </Link>
                        </div>
                        <div className="col-md-6 animate__animated animate__backInRight">
                            <img src={bannerImage} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;