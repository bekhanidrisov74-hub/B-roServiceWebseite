import React from 'react';
import Hero from './Hero';
import Vorteile from './Vorteile';
import Leistungen from './Leistungen';
import Preise from './Preise';
import UeberUns from './UeberUns';
import Kontakt from './Kontakt';

const Home = () => {
    return (
        <main>
            <Hero />
            <Vorteile />
            <Leistungen />
            <Preise />
            <UeberUns />
            <Kontakt />
        </main>
    );
};

export default Home;
