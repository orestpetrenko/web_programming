import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Button from "./Button";
import { Select } from 'antd';
import useFetchCars from "../FetchCar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/itemSlice";

function Item() {
    const { id } = useParams();
    const { cars, loading, error} = useFetchCars();
    const [selectedType, setSelectedType] = useState("Привід");
    const [selectedPower, setSelectedPower] = useState("Комлпектація");
    const [count, setCount] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const car = cars.find(item => String(item._id) === id);

    const handleChangeType = (value) => {
        setSelectedType(value);
    }
    const handleChangePower = (value) => {
        setSelectedPower(value);
    }

    const handleViewMoreClick = (id) => {
        navigate(`/cars/${id}`);
    };

    if (loading) {
        return <div className="load">Завантаження...</div>;
    }
    if (error) {
        return <p>Помилка: {error}</p>;
    }

    const handleAdd = () => {
        if ( car ) {
            dispatch(addItem({ ...car, type: selectedType, power: selectedPower, quantity: count}));
        }
    }

    return(<div>
        <div className="item-decriptions">
            <img className="item-img" src={car.img}/>
            <div>
                <h2>{car.title}</h2>
                <p className="item-description">{car.description}</p>
                <div className="item-selects">
                    <div className="item-select">
                        <label className="label" htmlFor="select">Привід</label>
                        <Select id="select" className="select" value={selectedType} onChange={handleChangeType} onCountChange={setCount}>
                            <Select.Option value="бензиновий">Передній</Select.Option>
                            <Select.Option value="акумуляторний">Задній</Select.Option>
                            <Select.Option value="електричний">Повний</Select.Option>
                        </Select>
                    </div>
                    <div className="item-select">
                        <label className="label" htmlFor="select">Комплектація</label>
                        <Select className="select" value={selectedPower} onChange={handleChangePower} onCountChange={setCount}>
                            <Select.Option value="4,95 кВт">Basic</Select.Option>
                            <Select.Option value="3,35 кВт">Hiht</Select.Option>
                            <Select.Option value="2,65 кВт">LUXury</Select.Option>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
        <div className="item-nav">
            <p className="item-price">Price: {`${car.price} $`}</p>
            <div>
                <Link className="link" to="/catalog">
                    <Button className="back-btn"  text="Go back"/>
                </Link>
                <Link className="link" to="/cart">
                    <Button className="add-btn" text="Add to cart" onClick={handleAdd}/>
                </Link>
            </div>
        </div>
    </div>)
}

export default Item;