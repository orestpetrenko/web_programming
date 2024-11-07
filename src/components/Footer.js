import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGooglePlus } from 'react-icons/fa';
import './css/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="branding">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo.</p>
            </div>
            <div className="footer-logo">
                <img src="/images/logo.png" alt="Logo" />
            </div>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon" /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a>
                <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer"><FaGooglePlus className="icon" /></a>
            </div>
            <div className="copyright">
                <p>2020 IoT © Copyright all rights reserved, bla bla</p>
            </div>
        </footer>
    );
}

export default Footer;
