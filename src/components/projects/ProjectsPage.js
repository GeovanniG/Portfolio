import React from 'react';
import Frame from '../Frame';
import Project1 from './Project1/Project1';
import Project2 from './Project2/Project2';
import Project3 from './Project3/Project3';

const ProjectsPage = () => {
    return (
        <Frame>
            <Project1 />
            <Project2 />
            <Project3 />
        </Frame>
    )
}

export default ProjectsPage;