import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, subtitle, text, icon }) => {
    return (
        <div className="home-section__card">
            <Link to="/projects" className="home-section__link">
                <p className="home-section__link-text">
                    {icon && <FontAwesomeIcon icon={icon} className="home-section__link-icon" />}
                    {title}
                </p>
            </Link>
            <div className="home-section__text">
                <h2 className="home-section__text-title">{subtitle}</h2>
                {text && 
                text.map((paragraph, i) => <p key={i} className="home-section__text-body">{paragraph}</p>)}
            </div>
        </div>
    )
}

export default Card;