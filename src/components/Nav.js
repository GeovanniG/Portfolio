import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Nav = () => {
    const [iconBtn, setIconBtn] = useState(false);
    const dropdownClass = iconBtn ? '' : 'nav-dropdown__display';

    return (
            <nav className="nav" aria-label="Main Navigation">
                <NavLink to="/" exact className="nav-link" activeClassName="nav-link--active">CodingGeo</NavLink>
                <div className="nav-right">
                    <span 
                        className="nav-icon nav-link"
                        onClick={() => setIconBtn(!iconBtn)}
                    >
                        <FaBars />
                    </span>
                    <div className={`nav-dropdown ${dropdownClass}`} >
                        <NavLink to="/projects" className="nav-link" activeClassName="nav-link--active">Projects</NavLink>
                        {/* <NavLink to="/resume" className="nav-link" activeClassName="nav-link--active">Resume</NavLink> */}
                        <NavLink to="/about" className="nav-link" activeClassName="nav-link--active">About</NavLink>
                        <NavLink to="/contact" className="nav-link" activeClassName="nav-link--active">Contact</NavLink>
                        {/* <NavLink to="/goals" className="nav-link" activeClassName="nav-link--active">Goals</NavLink> */}
                    </div>
                </div>
            </nav>
    )
}

export default Nav;