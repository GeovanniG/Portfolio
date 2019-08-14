import React from 'react';
import Project from '../Project';
import ProjectList from '../ProjectList';
import image from './project-1.png';

const Project1 = () => (
    <Project
        liveProject="https://gonzalez-portfolio.herokuapp.com/portfolio"
        sourceCode="https://github.com/GeovanniG/Portfolio" 
        image={image} 
        title="Project Geo" 
        items={[
            `This is verison 1.0.0 of my personal website. As my tastes change so will the layout. Currently the site is 
                painted in black, white, and green. In the future this may change.`,
            `Simplicity was chosen over complexity because simplicity leaves more room for growth.`,
        ]}    
    >
        <ProjectList 
            title="Tech Used" 
            items={[
                `HTML`,
                `Sass`,
                `React`,
                `Node`,
                `Express`
            ]} 
        />

        <ProjectList 
            title="Lessons Learned" 
            items={[
                `UI/UX design is harder than expected`,
                `Use components to make site scalable`,
                `Redux is not always necessary`,
                `React-routers make building SPA a breeze`,
                `Code splitting can make initial loads faster`,
                `For production it's recommended to gzip files and add cache-control`
            ]} 
        />

        <ProjectList 
            title="To do" 
            items={[
                `Improve UI/UX`,
                `Consider using a different set of colors`,
                `Add accessibility features`,
                `Look into SEO`,
                `Add testing`
            ]} 
        />
    </Project>
)

export default Project1;