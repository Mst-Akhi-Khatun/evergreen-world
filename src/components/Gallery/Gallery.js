import React from 'react';
import './Gallery.css'
import gallery1 from '../../images/Gallery/gallery1.jpg';
import gallery2 from '../../images/Gallery/gallery2.jpg';
import gallery3 from '../../images/Gallery/gallery3.jpg';
import gallery4 from '../../images/Gallery/gallery4.jpg';
import gallery5 from '../../images/Gallery/gallery5.jpg';
import gallery6 from '../../images/Gallery/gallery6.jpg';
import gallery7 from '../../images/Gallery/gallery7.jpg';
import gallery8 from '../../images/Gallery/gallery8.jpg';
import gallery9 from '../../images/Gallery/gallery9.jpg';
import gallery10 from '../../images/Gallery/gallery10.jpg';
import gallery11 from '../../images/Gallery/gallery11.jpg';
import gallery12 from '../../images/Gallery/gallery12.jpg';


const Gallery = () => {
    return (
        <div className="py-5 gallery container">
            <div className="main-section">
                <div className="section-title">
                    <h1 className="text-center py-4">Our <span className="text-color">Gallery</span></h1>
                </div>
            </div>
            <p className="text-center pt-5 font">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laudantium unde, dolores est <br /> corporis, sunt deserunt sequi.</p>
            <div class="row row-cols-1 row-cols-md-4 g-4 pt-5">
                <div class="col">
                    <div class="card">
                        <img src={gallery1} class="card-img-top" alt="..." />
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={gallery2} class="card-img-top" alt="..." />
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={gallery3} class="card-img-top" alt="..." />
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={gallery4} class="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4 py-5">
                <div class="col">
                    <div class="card">
                        <img src={gallery5} class="card-img-top" alt="..." />
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={gallery6} class="card-img-top" alt="..." />
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={gallery7} class="card-img-top" alt="..." />
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={gallery8} class="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card">
                        <img src={gallery9} class="card-img-top" alt="..." />
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={gallery10} class="card-img-top" alt="..." />
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={gallery11} class="card-img-top" alt="..." />
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={gallery12} class="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;