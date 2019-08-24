import React from 'react';

const Header = () => {
    return (
        <header className="home-header">
            <h1 className="home-header__title">
                <span className="home-header__title--inverse">Geo</span>vanni Gonzalez
            </h1>
            <p className="home-header__text"> A software developer</p>
            <div className="home-header__text--fade-in">
                <p className="home-header__text--fade-in-1s">with persistence,</p>
                <p className="home-header__text--fade-in-2s">curiosity,</p>
                <p className="home-header__text--fade-in-3s">humility,</p>
                <p className="home-header__text--fade-in-4s">and</p>
                <p className="home-header__text--fade-in-5s">ambition.</p>
            </div>
        </header>
    )
}

export default Header;