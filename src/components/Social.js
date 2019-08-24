import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub /*, faLinkedin */} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Social = () => {
    return (
        <div className="social__icons">
            <a href="https://github.com/GeovanniG" aria-label="Github">
                <FontAwesomeIcon icon={faGithub} className="social__icon" />
            </a>
            <a href="mailto:geog714@gmail.com?Subject=From%20Portfolio" target="_top" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} className="social__icon" />
            </a>
            {/* <a href="/"><FontAwesomeIcon icon={faLinkedin} className="social__icon" /></a> */}
        </div>
    )
}

export default Social;