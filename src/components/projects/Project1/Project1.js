import React from 'react';
import Project from '../Project';
import ProjectList from '../ProjectList';
import image from './project-1.png';

const Project1 = () => (
    <Project
        liveProject="https://geovannig.github.io/date-space/"
        sourceCode="https://github.com/GeovanniG/date-space" 
        image={image} 
        title="Project Geo" 
        items={[
            `This is verison 1.0.0 of my website. As my tastes change so will the layout. Currently the site is 
                painted in black, white, and green. In the future this may change.`,
            `Simplicity was chosen over complexity because simplicity has more room for growth.`
        ]}    
    >
        <ProjectList 
            title="Tech Used" 
            items={[
                `HTML`,
                `Sass`,
                `React`
            ]} 
        />

        <ProjectList 
            title="Lessons Learned" 
            items={[
                `UI/UX design is harder than expected`,
                `Use components to make site scalable`
            ]} 
        />

        <ProjectList 
            title="To do" 
            items={[
                `Add links to this page`,
                `Add links to social icons`,
                `Set up form on contact page`
            ]} 
        />
    </Project>
)

export default Project1;