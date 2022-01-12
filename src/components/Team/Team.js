import React from 'react';
import './Team.css';
import team1 from '../../images/Team/team1.png';
import team2 from '../../images/Team/team2.png';
import team3 from '../../images/Team/team3.png';
import team4 from '../../images/Team/team4.png';

const Team = () => {
    return (
        <div className="team-container container">
            <div className="main-section">
                <div className="section-title">
                    <h1 className="text-center py-4">Our <span className="text-color">Team</span></h1>
                </div>
            </div>
            <p className="text-center pt-5 font">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laudantium unde, dolores est <br /> corporis, sunt deserunt sequi.</p>

            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card">
                        <img src={team1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p className="card-title s">Card title</p>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={team2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Card title</h3>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={team3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Card title</h3>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={team4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;