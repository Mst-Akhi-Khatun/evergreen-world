import React from 'react';
import Assessment from '../Assessment/Assessment';
import ChooseUs from '../ChooseUs/ChooseUs';
import Features from '../Features/Features';
import Gallery from '../Gallery/Gallery';
import Banner from '../Header/Banner/Banner';
import Service from '../Service/Service';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Service></Service>
            <Gallery></Gallery>
            <Team></Team>
            <ChooseUs></ChooseUs>
            <Assessment></Assessment>
        </div>
    );
};

export default Home;