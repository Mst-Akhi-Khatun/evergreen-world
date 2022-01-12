import React from 'react';
import './ChooseUs.css';
import choseUs from '../../images/Choose-Us/choose-us.jpg';
import service1 from '../../images/Service/service1.png';
import service2 from '../../images/Service/service2.png';
import service3 from '../../images/Service/service3.png';
import { GiPalmTree } from 'react-icons/fa';

const ChooseUs = () => {
    return (
        <div className="py-5 container">
            <h1 className="text-center pt-4">Whi <sapn className="text-color">Choose Us ?</sapn></h1>
            <h1 className="text-center pb-4"><i className="fab fa-pagelines text-color"></i></h1>
            <div className="row">
                <div className="col-md-6 back">
                    <img src={choseUs} alt="" />
                </div>
                <div className="col-md-6 pt-5">
                    <div className="row pt-5">
                        <div className="col-md-2 d-flex align-items-center">
                            <div>
                                <h1><i className="fas fa-tree text-color"></i></h1>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <h3>
                                Hand Planted</h3>
                            <p>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <h1><i className="fas fa-cannabis text-color"></i></h1>
                        </div>
                        <div className="col-md-10">
                            <h3>Natural Sunlight</h3>
                            <p>It is a long established fact that a reader will be distracted by the reable content of a page.</p>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-2">
                        <h1><i className="fab fa-pagelines text-color"></i></h1>
                        </div>
                        <div className="col-md-10">
                            <h4>Clean Air</h4>
                            <p>There are many variations of passages of lorem ipsum available, but the majority have suffered.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;