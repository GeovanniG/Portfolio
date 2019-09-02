import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Frame = ({ children, className }) => {
    return (
        <div className="frame">
            <Nav />
            <div className={`${className}`}>
                {children}
            </div>
            {/* <Footer className="frame__footer" /> */}
            <Footer />
        </div>
    )
}

export default Frame;