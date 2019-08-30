import React from 'react';
import { faCode, faFile, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

const Section = () => {
    return (        
        <section className="home-section">
            <Card 
                title="Projects"
                icon={faCode}
                subtitle="My Ventures"
                text={[`Have a look at my work. Through this journey, I have acquired skills that can best be experienced through my projects.
                        They entail a bit of everything. Some are full stack apps using React, Moongose, Express, and Node;
                        while others are purely front-end or back-end apps.`
                       ]}
            />
            
            <Card 
                title="Resume"
                icon={faFile}
                subtitle="My Accomplishments"
                text={[`Interested and want to learn more? Have a look at my resume, it includes my latest activties and achievements.`,
                        `My distinct background maybe just what your company needs. After all, different perspectives may yield new solutions
                        to persistent problems.`
                        ]}
            />

            <Card 
                title="Contact"
                icon={faAddressBook}
                subtitle="Get In Touch!"
                text={[`Let's have a conversation. I'm open to any and all proposals.`, 
                        `Proposals such as offers and improvements will be greatly appreciated, but so will simple comments.`
                        ]}
            />
        </section>
    )
}

export default Section;