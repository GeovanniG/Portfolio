import React from 'react';
import Project from '../Project';
import ProjectList from '../ProjectList';
import image from './project-2.png';

const Project2 = () => (
    <Project 
        liveProject="https://gonzalez-todo-auth-app.herokuapp.com/"
        sourceCode="https://github.com/GeovanniG/todo-app"
        image={image} 
        title="Todo List with Authentication and a Database" 
        items={[
            `Why settle for any todo list app? After signing up, this app will save and store your todo's for a time when they are ready to be completed.`,
            `This site was built using bootstrap and the main objectives were learning authentication and learning how to connect the back-end to the front-end`,
            `To make the site more interesting, a database was added.`
        ]}    
    >
        <ProjectList 
            title="Tech Used" 
            items={[
                `Node`,
                `Express`,
                `MongoDB`,
                `JWT`,
                'React',
                'Bootstrap'
            ]} 
        />

        <ProjectList 
            title="Lessons Learned" 
            items={[
                `Directory-wise, I should've better seperated the front-end and back-end folders`,
                `Using Passport instead of self-authenticating may have been easier`,
                `When using models/tables, it's best to be explict with relationships`,
                `It's best to use env variables for sensitive data`
            ]} 
        />

        <ProjectList 
            title="To do" 
            items={[
                `Add update capabilities to both users and todos`,
                `Allow todos to be arranged`,
                `Fix strange behavior with back button, i.e, redirect`
            ]} 
        />
    </Project>
)

export default Project2;