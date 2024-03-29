import React from 'react';
import Nav from './Nav';
// import Social from './Social';
import Footer from './Footer';

const Frame = ({ children, className }) => {
    return (
        <div className="frame">
            <Nav />
            {/* <Social /> */}
            <div className={`${className}`}>
                {children}
            </div>
            {/* <Footer className="frame__footer" /> */}
            <Footer />
        </div>
    )
}

export default Frame;