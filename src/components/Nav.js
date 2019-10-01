import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
            <nav className="nav" aria-label="Main Navigation">
                <NavLink to="/" exact className="nav-link" activeClassName="nav-link--active">Home</NavLink>
                <NavLink to="/projects" className="nav-link" activeClassName="nav-link--active">Projects</NavLink>
                {/* <NavLink to="/resume" className="nav-link" activeClassName="nav-link--active">Resume</NavLink> */}
                <NavLink to="/about" className="nav-link" activeClassName="nav-link--active">About <span className="nav--hide">Me</span></NavLink>
                <NavLink to="/contact" className="nav-link" activeClassName="nav-link--active">Contact</NavLink>
                {/* <NavLink to="/goals" className="nav-link" activeClassName="nav-link--active">Goals</NavLink> */}
            </nav>
    )
}

export default Nav;