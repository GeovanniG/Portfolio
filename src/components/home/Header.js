import React from 'react';

const Header = () => {
    return (
        <header className="home-header">
            <h1 className="home-header__title">
                <span className="home-header__title--inverse">Geo</span>vanni Gonzalez
            </h1>
            <div className="home-header__text--fade-in">
                <p>A software developer</p>
                <p>that specializes in</p>
                <p className="home-header__text--fade-in-50ms"><span className="home-header__text--color">Front-end</span> development,</p>
                <p className="home-header__text--fade-in-100ms">
                    <span className="home-header__text--color">React</span>, 
                    <span className="home-header__text--fade-in-150ms"> and a bit of</span>
                </p>
                <p className="home-header__text--fade-in-200ms"><span className="home-header__text--color">Back-end</span> development.</p>
            </div>
        </header>
    )
}

export default Header;