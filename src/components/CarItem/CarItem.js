import React from 'react';

function CarItem({ car }) {
    return (
        <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
            <h2>{car.name}</h2>
            <p>Year: {car.year}</p>
            <p>Price: {car.price}</p>
            <p>Color: {car.color}</p>
            <p>Mileage: {car.mileage}</p>
            <button style={{ marginRight: '5px' }}>Edit</button>
            <button>Delete</button>
        </div>
    );
}

export default CarItem;
