import React from 'react';
import './Subscribe.css';
import service from '../../images/Service/service.png';

const Subscribe = () => {
    return (
        <div className="py-5">
            <div className="container text-center team-container py-5">
                <h1>Subscribe Our Newsletter</h1>
                <img src={service} alt="" />
                <p className="py-3">Enter Your email address to join our mailing list and keep yourself update</p>
                <div className="input-group mb-3 input-section">
                    <input type="text" class="form-control py-3" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary px-4" type="button" id="button-addon2">Button</button>
                </div>
            </div>

        </div>
    );
};

export default Subscribe;