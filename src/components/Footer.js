import React from 'react';

const Footer = ({ className }) => {
    return (
        <>
            <footer className={`footer ${className}`}>
                {/* Created by Geo */}
                <section className="footer--contact">
                    <section className="footer--intro">
                        <p>Always looking for growth opportunities.</p>
                        <p>You can reach me at:</p>
                    </section>

                    <section className="footer--social">
                        <section className="footer--phone">
                            <h2 className="footer--social-title">Phone</h2>
                            <p>+1 (714) 812-7393</p>      
                        </section>
                    
                        <section className="footer--email">
                            <h2 className="footer--social-title">Email</h2>
                            <a href="mailto:geog714@gmail.com?Subject=Hello" target="_top" aria-label="Email" className="footer--link">geog714@gmail.com</a>
                        </section>

                        <section className="footer--location">
                            <h2 className="footer--social-title">Location</h2>
                            <p>Anaheim, CA, USA</p>
                        </section>

                        <section className="footer--media">
                            <h2 className="footer--social-title">Media</h2>
                            <a href="https://github.com/GeovanniG/" className="footer--link">Git</a>
                        </section>
                    </section>
                </section>

                <section className="footer--about">
                    <h2 className="footer--site-title">CodingGeo</h2>
                    <p>A portfolio built with plain-old react, html and css.</p>
                </section>
            </footer>
        </>
    )
}

export default Footer;