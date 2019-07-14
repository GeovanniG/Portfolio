import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from '../Nav';
import Social from '../Social';

const HomePage = () => {
    return (
        <div className="homepage">
            <Social />
            <Nav />
            <Header />
            <Footer />
        </div>
    )
}

export default HomePage;