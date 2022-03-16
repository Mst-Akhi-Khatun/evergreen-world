import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <div>
            <div class="container overflow-hidden">
                <div class="row gy-5 py-5">
                    <div className="col-4 media-body hover-midea">
                        <div class="p-3 border-section p-5">
                            <h1 className="text-color text-center"><i class="fas fa-leaf"></i></h1>
                            <h5 className="text-center resize pt-2">Garden Planting</h5>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="p-3 border-section p-5">
                            <h1 className="text-color text-center"><i class="fab fa-pagelines"></i></h1>
                            <h5 className="text-center resize pt-2">Lawn Renovation</h5>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="p-3 border-section p-5">
                            <h1 className="text-color text-center"><i class="fas fa-cut"></i></h1>
                            <h5 className="text-center resize pt-2">Irrigation & Drainage</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;