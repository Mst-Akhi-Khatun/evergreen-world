import React from 'react';
import Gallery from '../Gallery/Gallery';
import Banner from '../Header/Banner/Banner';
import Service from '../Service/Service';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Gallery></Gallery>
            <Team></Team>
        </div>
    );
};

export default Home;