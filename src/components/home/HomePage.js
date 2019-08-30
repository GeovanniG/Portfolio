import React from 'react';
import Header from './Header';
import Section from './Section';
import Nav from '../Nav';
import Social from '../Social';

const HomePage = () => {
    return (
        <div className="homepage">
            <Nav />
            <Social />
            <Header />
            <Section />
        </div>
    )
}

export default HomePage;