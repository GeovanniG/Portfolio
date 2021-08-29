import React from 'react';

const Header = () => {
    return (
        <header className="home-header">
            <h1 className="home-header__title">
                <span className="home-header__title--inverse">Geo</span>vanni Gonzalez
            </h1>
            <div className="home-header__text--fade-in">
                <p>A Software Engineer</p>
                <p>with interests in</p>
                <p className="home-header__text--fade-in-50ms"><span className="home-header__text--color">Backend Development</span>,</p>
                <p className="home-header__text--fade-in-100ms">
                    <span className="home-header__text--color">Machine Learning</span>,
                    <span className="home-header__text--fade-in-150ms"> and also</span>
                </p>
                <p className="home-header__text--fade-in-200ms home-header__text--color">Artificial Intelligence.</p>
            </div>
        </header>
    )
}

export default Header;