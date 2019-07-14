import React from 'react';
import Project from '../Project';
import ProjectList from '../ProjectList';
import image from './project-3.png';

const Project1 = () => (
    <Project
        liveProject="https://geovannig.github.io/date-space/"
        sourceCode="https://github.com/GeovanniG/date-space"  
        image={image} 
        title="Astronomy Explained with Pictures" 
        items={[
            `If you need to relax and enjoy look at beauty provide by nature have a look at this app.`,
            `When a vaild date is entered, a space picture with a description will be returned. Simple yet relaxing.`
        ]}    
    >
        <ProjectList 
            title="Tech Used" 
            items={[
                `React`,
                `Redux as React Hooks`,
                `bootstrap`,
                'APIs'
            ]}
        />

        <ProjectList 
            title="Lessons Learned" 
            items={[
                `API can give life to a site`,
                `React hooks can completely replace redux`,
                `React hooks make managing state simpler`
            ]} 
        />

        <ProjectList 
            title="To do" 
            items={[
                `Add more functionalities such as deleting cards`,
                `Consider adding a date picker`,
                `Give the site a more space-y look`
            ]} 
        />
    </Project>
)

export default Project1;