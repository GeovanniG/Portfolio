import React from 'react';
import Frame from '../Frame';
import image from './resume.png'

const ResumePage = () => {
    return (
        <Frame>
            <a href="./resume.pdf" download="resume-geo.pdf"><button className="resume-btn">Download</button></a>
            <div className="resume__box">
                {/* <p>Work in progress</p> */}
                <img src={image} alt="resume" className="resume" />
            </div>
        </Frame>
    )
}

export default ResumePage;
