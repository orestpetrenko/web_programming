import React, { useState, useEffect } from "react";
import Cars from "./cars";
import Button from "./Button";
import useFetchCars from "../FetchCar";

const Catalog = () => {
    const [visibleCount, setVisibleCount] = useState(4);
    const { cars, loading, error } = useFetchCars();

    const viewMore = () => {
        setVisibleCount(visibleCount + 4);
    }

    const hideCards = () => {
        setVisibleCount(4);
    };

    if (loading) {
        return <p className="load">Завантаження...</p>;
    }

    if (error) {
        return <p>Помилка: {error}</p>;
    }

    return (
        <div>
            <Cars data={cars.slice(0, visibleCount)} /> 
            {visibleCount < cars.length && (
                <Button text="View more" className="view-btn" onClick={viewMore}/>
            )}
            {visibleCount >= cars.length && (
                <Button text="Hide cards" className="view-btn" onClick={hideCards} />
            )}
        </div>
    );
};

export default Catalog;