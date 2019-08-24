import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Frame = (props) => {
    return (
        <div className="frame">
            <Nav />
            {/* <div className="frame__box"> */}
                {props.children}
            {/* </div> */}
            {/* <Footer className="frame__footer" /> */}
            <Footer />
        </div>
    )
}

export default Frame;