import React from 'react';
import CarItem from './CarItem/CarItem';

function CarList() {
    const cars = [
        { id: 1, name: 'Audi A3', year: 2000, price: '$1222', color: 'red', mileage: 22222 },
        { id: 2, name: 'BMW X5', year: 2000, price: '$3456', color: 'Red', mileage: 2333 }
    ];

    return (
        <div style={{ padding: '20px' }}>
            {cars.map(car => (
                <CarItem key={car.id} car={car} />
            ))}
        </div>
    );
}

export default CarList;
