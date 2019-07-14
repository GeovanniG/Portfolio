import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, subtitle, text, icon }) => {
    return (
        <div className="home-footer__card">
            <Link to="/projects" className="home-footer__link">
                <p className="home-footer__link-text">
                    {icon && <FontAwesomeIcon icon={icon} className="home-footer__link-icon" />}
                    {title}
                </p>
            </Link>
            <div className="home-footer__text">
                <h2 className="home-footer__text-title">{subtitle}</h2>
                {text && 
                text.map((paragraph, i) => <p key={i} className="home-footer__text-body">{paragraph}</p>)}
            </div>
        </div>
    )
}

export default Card;