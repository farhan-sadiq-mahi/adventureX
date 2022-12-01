import React from 'react';
import Navbar from '../../Navbar/Navbar';
import ChallengesSection from './ChallengesSection';
import HeroComponent from './HeroComponent';
import './Home.css'

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Navbar />
            <HeroComponent />
            <ChallengesSection />

        </div>
    );
};

export default Home;