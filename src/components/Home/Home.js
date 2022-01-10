import React from 'react';
import Gallery from '../Gallery/Gallery';
import Banner from '../Header/Banner/Banner';
import Store from '../Store/Store';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Store></Store>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;