import React from 'react';
import Plante1 from '../../images/Plante/plante1.jpg';
import Plante2 from '../../images/Plante/plante2.jpg';
import Plante3 from '../../images/Plante/plante3.jpg';
import Plante4 from '../../images/Plante/plante4.jpg';
import Plante5 from '../../images/Plante/plante5.jpg';
import Plante6 from '../../images/Plante/plante6.jpg';

const Plant = () => {
    return (
        <div className="container text-center">
            <h1 className="py-3">this is plant</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 mb-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={Plante1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Pellentesque aliquet</h5>
                            <a href="">
                                <button className="rounded-pill px-4 text-white btn background">See Detail</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={Plante2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">American Marigold</h5>
                            <a href="">
                                <button className="rounded-pill px-4 text-white btn background">See more</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={Plante3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Black Eyed Susan</h5>
                            <a href="">
                                <button className="rounded-pill px-4 text-white btn background">See more</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={Plante4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Bleeding Heart</h5>
                            <a href="">
                                <button className="rounded-pill px-4 text-white btn background">See more</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={Plante5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Bloody Cranesbill</h5>
                            <a href="">
                                <button className="rounded-pill px-4 text-white btn background">See more</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={Plante6} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Butterfly Weed</h5>
                            <a href="">
                                <button className="rounded-pill px-4 text-white btn background">See more</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plant;