import React from 'react';
// import ProjectList from './ProjectList';

const Project = ({ image, title, items, children, liveProject, sourceCode } = {}) => {
    return (
        <section className="project">
            <div className="project__img-box">
                <a href={liveProject}>
                    <img src={image} alt="project" className="project__img "/>
                </a>
            </div>
            <div className="project__text-box">
                <div  className="project__text-title">
                    <h2>{title}</h2>
                </div>
                {items.map((item, i) => <p key={i} className="project__text">{item}</p>)}
                <div className="project__text-button-box">
                    <a href={liveProject} className="project__text-link btn">
                        {/* <button className="project__text-button"> */}
                            Live Project
                        {/* </button> */}
                    </a>
                    <a href={sourceCode} className="project__text-link btn">
                        {/* <button className="project__text-button"> */}
                            Source Code
                        {/* </button> */}
                    </a>
                </div>
            </div>
            { children }
        </section>
    )
}

export default Project;