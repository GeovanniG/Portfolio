import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const HomePage = React.lazy(() => import('../components/home/HomePage'));
const ProjectsPage = React.lazy(() => import('../components/projects/ProjectsPage'));
const ResumePage = React.lazy(() => import('../components/resume/ResumePage'));
const AboutPage = React.lazy(() => import('../components/about/AboutPage'));
const ContactPage = React.lazy(() => import('../components/contact/ContactPage'));
// const PrototypePage = React.lazy(() => import('../components/proto/Prototype'));


const WebsiteRouter = () => {
    return (
        <BrowserRouter basename="/">
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/projects" component={ProjectsPage} />
                    <Route path="/resume" component={ResumePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/contact" component={ContactPage} />
                    {/* <Route path="/proto" component={PrototypePage} /> */}
                    <Route path="/*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default WebsiteRouter;