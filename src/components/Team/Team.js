import React from 'react';
import './Team.css';
import team1 from '../../images/Team/team1.png';
import team2 from '../../images/Team/team2.png';
import team3 from '../../images/Team/team3.png';
import team4 from '../../images/Team/team4.png';

const Team = () => {
    return (
        <div className="team-container">
            <div className="container">
                <div className="main-section">
                    <div className="section-title">
                        <h1 className="text-center py-4">Meet Our <span className="text-color">Team</span></h1>
                    </div>
                </div>
                <p className="text-center pt-5 font">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laudantium unde, dolores est <br /> corporis, sunt deserunt sequi.</p>

                <div className="row row-cols-1 row-cols-md-4 g-4 py-5 text-center">
                    <div class="col">
                        <div>
                            <img src={team1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5>JOHN BEEN ROBI</h5>
                                <p class="card-text">Garden Specialist</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <img src={team2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5>ASHIM KUMER</h5>
                                <p class="card-text">Garden Specialist</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <img src={team3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5>MADHUSUDAN PAL</h5>
                                <p class="card-text">Garden Specialist</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <img src={team4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5>JOHN BEEN ROBI</h5>
                                <p class="card-text">Garden Specialist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;