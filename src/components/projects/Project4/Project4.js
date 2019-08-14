import React from 'react';
import Project from '../Project';
import ProjectList from '../ProjectList';
import image from './project-4.png';

const Project4 = () => (
    <Project
        liveProject="https://geovannig.github.io/Pet-App/"
        sourceCode="https://github.com/GeovanniG/Pet-App"  
        image={image} 
        title="Pet Adoption Finder" 
        items={[
            `Interested in adopting or sponsoring a pet? This simple app was created to show you some options`,
            `This app includes all sorts of pets such as dogs, cats, birds, and hamsters.`
        ]}    
    >
        <ProjectList 
            title="Tech Used" 
            items={[
                `React`,
                `React Hooks`,
                `Modern API`
            ]}
        />

        <ProjectList 
            title="Lessons Learned" 
            items={[
                `The future of API's involve token validation`,
                `There are many options for storing auth tokens`
            ]} 
        />

        <ProjectList 
            title="To do" 
            items={[
                `Add more functionalities such as loading more pets`,
                `Change home image so that it fills the screen on smaller devices`,
                `Consider having a page for each pet`,
                `Consider improving the search form`
            ]} 
        />
    </Project>
)

export default Project4;