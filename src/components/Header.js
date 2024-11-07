import React from 'react';
import './css/Header.css';
import Navigation from './Navigation';
 // Import the logo image

function Header() {
    return (
        <header className="header">
            <img src="images/logo.png" alt="CarMarket Logo" className="logo" /> {/* Display the logo image */}
            <h1>Home Page</h1>
            <Navigation />
        </header>
    );
}

export default Header;
