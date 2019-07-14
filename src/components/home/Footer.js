import React from 'react';
import { faCode, faFile, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

const Footer = () => {
    return (        
        <footer className="home-footer">
            <Card 
                title="Projects"
                icon={faCode}
                subtitle="My Ventures"
                text={[`Have a look at my work. Through this journey, I have acquired skills that can best be experienced through my projects.
                        They entail a bit of everything, from front-end with React, html, and css to back-end with Node and sql.`,
                       ]}
            />
            
            <Card 
                title="Resume"
                icon={faFile}
                subtitle="My Accomplishments"
                text={[`If my projects did not amaze you then have a look at my resume, it includes my latest activties and achievements. From a software
                        developer's standpoint, my background is a bit atypical, but I take proud in where my background has taken and ultimately will 
                        take me.`]}
            />

            <Card 
                title="Contact"
                icon={faAddressBook}
                subtitle="Get In Touch!"
                text={[`I'm always looking for improvements. Any feedback will greatly be appreciated.`]}
            />
        </footer>
    )
}

export default Footer;