import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Assessment from '../Assessment/Assessment';
import ChooseUs from '../ChooseUs/ChooseUs';
import Features from '../Features/Features';
import Gallery from '../Gallery/Gallery';
import Banner from '../Header/Banner/Banner';
import Plant from '../Plant/Plant';
import Service from '../Service/Service';
import Subscribe from '../Subscribe/Subscribe';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Plant></Plant>
            <Service></Service>
            <Gallery></Gallery>
            <Team></Team>
            <ChooseUs></ChooseUs>
            <Assessment></Assessment>
            <AboutUs></AboutUs>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;