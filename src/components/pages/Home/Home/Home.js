import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner2 from '../Banner/Banner2';
import TopBanner from '../Banner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header/>
            <TopBanner/>
            <Banner2/>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;