import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Social = () => {
    return (
        <div className="social__icons">
            <a href="https://github.com/GeovanniG" aria-label="Github">
                <span className="social__icon"><FaGithub /></span>
            </a>
            <a href="mailto:geog714@gmail.com?Subject=From%20Portfolio" target="_top" aria-label="Email">
                <span className="social__icon"><FaEnvelope /></span>
            </a>
        </div>
    )
}

export default Social;