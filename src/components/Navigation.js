import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <Link to="/"><button>Home</button></Link>
            <Link to="/catalog"><button>Catalog</button></Link>
            <button>Cart</button>
        </nav>
    );
}

export default Navigation;
