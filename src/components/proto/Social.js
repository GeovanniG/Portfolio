import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Social = () => {
    return (
        <div className="social__icons">
            <FontAwesomeIcon icon={faGithub} className="social__icon" />
            <FontAwesomeIcon icon={faEnvelope} className="social__icon" />
            <FontAwesomeIcon icon={faLinkedin} className="social__icon" />
        </div>
    )
}

export default Social;