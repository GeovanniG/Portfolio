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
            <div className="home-btn-group">
                <a href="https://geovannig.github.io/Portfolio-v2/" className="home-btn--link"><button className="home-btn">In Progress Project</button></a>
            </div>
            <Section />
        </div>
    )
}

export default HomePage;