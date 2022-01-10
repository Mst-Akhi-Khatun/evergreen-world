import React from 'react';
import store3 from '../../images/Store/store-3.jpg';
import './Gallery.css'

const Gallery = () => {
    return (
        <div className="py-5 gallery">
            <h1 className="text-center colorGreen">this is gallery</h1>

            <div className="row">
                <div class="col-md-4">
                    <div class="card h-100">
                        <img src={store3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;