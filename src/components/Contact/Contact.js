import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container py-5">
            <h1 className="text-center pb-5">Contact Us</h1>
            <div className="contact-section">
                <iframe class="map" height="400" width="100%" src="https://www.tripadvisor.com/Restaurants-g293936-c8-Dhaka_City_Dhaka_Division.html#MAPVIEW" allowfullscreen="" loading="lazy"></iframe>

                <div className="form-section mt-5" id="form-section">
                    <form action="">
                        <div class="inputBox">
                            <input type="text" placeholder="first name" />
                            <input type="text" placeholder="last name" />
                        </div>
                        <div class="inputBox">
                            <input type="email" placeholder="your email" />
                            <input type="number" placeholder="your number" />
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
                        <div className="text-center pb-3">
                            <button type="submit" className="btn text-white border px-5 py-3">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;