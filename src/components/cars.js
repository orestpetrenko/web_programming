import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import useFetchCars from "../FetchCar";

const Cars = ({data, limit }) => {
    const { cars, loading, error } = useFetchCars(); 
    const navigate = useNavigate();
    const location = useLocation();

    const carData = data || cars

    const handleViewMoreClick = (id) => {
        navigate(`/cars/${id}`);
    };

    const displayedData = limit ? carData.slice(0, limit) : carData;


    if (error) {
        return <p>Помилка: {error}</p>;
    }

    return (
        <ul className="items-container">
            {displayedData.length > 0 ? (
                displayedData.map((car) => (
                    <li className="car-container" key={car.id}>
                        <img className="car-img" src={car.img} alt={car.title} />
                        <h1 className="title-car">{car.title}</h1>
                        <p className="description-car">{car.description}</p>
                        {location.pathname === '/catalog' && (
                            <>
                                <div className="price">
                                    <p className="txt-price">Price: </p>
                                    <p className="price-car">{`${car.price} $`}</p>
                                </div>
                                <Button className="view-more-btn" text="View more" onClick={() => handleViewMoreClick(car._id)}/>
                            </>
                        )}
                    </li>
                ))
            ) : (
                <p className="txt-no-found"></p>
            )}
        </ul>
    );
};

export default Cars;