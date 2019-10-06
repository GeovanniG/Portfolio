import React from 'react';
import { Link } from 'react-router-dom';
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
                    <span className="home-btn-group__left">
                        <a href="https://geovannig.github.io/Portfolio-v2/" className="home-btn--link"><button className="home-btn">In Progress Project 1</button></a>
                        <a href="https://phonecasesdeals.com/" className="home-btn--link"><button className="home-btn">In Progress Project 2</button></a>
                    </span>
                    <Link to="/projects" className="home-btn--link"><button className="home-btn home-btn__invert">All Projects</button></Link>
                </div>
                <p className="home-btn-text">
                    First Attempt at an Open Source Project:
                    {/* <a href="/" className="home-btn--link"><button className="home-btn">GRE Study App</button></a> */}
                    <a href="https://github.com/GeovanniG/gre-review" className="home-btn--link"><button className="home-btn">GRE Study App</button></a>
                </p>
                {/* <Section /> */}
            </div>
        </Frame>
    )
}

export default HomePage;