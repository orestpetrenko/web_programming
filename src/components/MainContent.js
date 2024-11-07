import React from 'react';
import ProductCard from './ProductCard';
import PrimaryButton from './PrimaryButton';
import './css/MainContent.css';

function MainContent() {
    return (
        <main className="main-content">
            <div className="main-image-text-container">
                <div className="main-image">
                    <img src="images/main.jpg" alt="Main Car" />
                </div>
                <div className="main-text">
                    <h2>Heading</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui,
                        non pulvinar lorem felis nec erat.
                    </p>
                </div>
            </div>
            <div className="product-cards">
                <ProductCard title="Tile 1 heading" />
                <ProductCard title="Tile 2 heading" />
                <ProductCard title="Tile 3 heading" />
            </div>
            <PrimaryButton text="View more" />
        </main>
    );
}

export default MainContent;
