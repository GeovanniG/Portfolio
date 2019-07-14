import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
            <nav className="nav">
                <NavLink to="/projects" className="nav-link" activeClassName="nav-link--active">Projects</NavLink>
                <NavLink to="/resume" className="nav-link" activeClassName="nav-link--active">Resume</NavLink>
                <NavLink to="/about" className="nav-link" activeClassName="nav-link--active">About Me</NavLink>
                <NavLink to="/contact" className="nav-link" activeClassName="nav-link--active">Contact</NavLink>
            </nav>
    )
}

export default Nav;