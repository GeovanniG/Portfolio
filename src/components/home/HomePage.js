import React from 'react';
import Header from './Header';
// import Section from './Section';
// import Nav from '../Nav';
import Social from '../Social';
import Frame from '../Frame';

const HomePage = () => {
    return (
        <Frame>
            <div className="homepage">
                {/* <Nav /> */}
                <Social />
                <Header />
                <div className="home-btn-group">
                    <a href="https://geovannig.github.io/Portfolio-v2/" className="home-btn--link"><button className="home-btn">In Progress Project 1</button></a>
                    <a href="https://phonecasesdeals.com/" className="home-btn--link"><button className="home-btn">In Progress Project 2</button></a>
                </div>
                {/* <Section /> */}
            </div>
        </Frame>
    )
}

export default HomePage;