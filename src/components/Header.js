import React from 'react';

function Header() {
    return (
        <header style={{ padding: '20px', textAlign: 'center', backgroundColor: '#282c34', color: 'white' }}>
            <h1>Car Inventory</h1>
            <nav>
                <button>My Cars</button>
                <button>Add Car</button>
            </nav>
        </header>
    );
}

export default Header;
