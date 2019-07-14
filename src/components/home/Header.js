import React from 'react';

const Header = () => {
    return (
        <header className="home-header" >
            <h2 className="home-header__title">
                <span className="home-header__title--inverse">Geo</span>vanni Gonzalez
            </h2>
            <p className="home-header__text"> A software developer</p>
            <div className="home-header__text--fade-in">
                <p className="home-header__text--fade-in-2s">with persistence,</p>
                <p className="home-header__text--fade-in-4s">curiosity,</p>
                <p className="home-header__text--fade-in-6s">humility,</p>
                <p className="home-header__text--fade-in-8s">and</p>
                <p className="home-header__text--fade-in-10s">ambition.</p>
            </div>
        </header>
    )
}

export default Header;