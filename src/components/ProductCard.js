import React from 'react';
import './css/ProductCard.css';

function ProductCard({ title }) {
    return (
        <div className="product-card">
            <div className="image-placeholder">
                <img src="images/images (1).jpeg" alt="Car Thumbnail" />
            </div>
            <h3>{title}</h3>
            <p>
                Loremm ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui,
                non pulvinar lorem felis nec erat.
            </p>
        </div>
    );
}

export default ProductCard;
