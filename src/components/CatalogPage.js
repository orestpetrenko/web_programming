import React from 'react';
import ProductCard from './ProductCard';
import './css/CatalogPage.css';

const carItems = [
    { id: 1, title: "Car 1", description: "Car 1 description." },
    { id: 2, title: "Car 2", description: "Car 2 description." },
    { id: 3, title: "Car 3", description: "Car 3 description." }
];

function CatalogPage() {
    return (
        <div className="catalog-page">
            <h2>Catalog</h2>
            <div className="product-cards">
                {carItems.map(car => (
                    <ProductCard key={car.id} title={car.title} description={car.description} />
                ))}
            </div>
        </div>
    );
}

export default CatalogPage;
