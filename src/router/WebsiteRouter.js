import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/home/HomePage';
import ProjectsPage from '../components/projects/ProjectsPage';
import ResumePage from '../components/resume/ResumePage';
import AboutPage from '../components/about/AboutPage';
import ContactPage from '../components/contact/ContactPage';
import PrototypePage from '../components/proto/Prototype';


const WebsiteRouter = () => {
    return (
        <BrowserRouter basename="/portfolio">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/resume" component={ResumePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/proto" component={PrototypePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default WebsiteRouter;