import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../redux/itemSlice";

const Cart = () => {
    const items = useSelector((state) => state.card.items);
    const dispatch = useDispatch()

    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleIncrement = ( id, type, power ) => {
        dispatch(incrementQuantity({ id, type, power }))
    };
    const handleDecrement = ( id, type, power ) => {
        dispatch(decrementQuantity({ id, type, power }))
    };

    return (<div>
            <h1 className="title-shopping-cart">Shopping Cart</h1>
        <div>
            {items.map((car) => (
                <div className="item-container" key={`${car._id}-${car.type}-${car.power}`}>
                    <img className="item-img" src={car.img}/>
                    <h2 className="item-title">{car.title}</h2>
                    <div className="item-element">
                        <div className="selected-item">
                            <p>Привід: {car.type}</p>
                            <p>Комплектація: {car.power}</p>
                        </div>
                        <div>
                            <Button className="btn-minus" text="-" onClick={() => handleDecrement(car._id, car.type, car.power)}/>
                            <span>{car.quantity}</span>
                            <Button className="btn-plus" text="+" onClick={() => handleIncrement(car._id,  car.type, car.power)}/>
                        </div>
                        <p className="item-price">{car.price * car.quantity} $</p>
                    </div>
                </div>
            ))}
        </div>
        <div>
        <p className="txt-cart">Total amount: {totalAmount}</p>
        </div>
        <div className="buttons">
            <Link className="link" to="/catalog">
                <Button className="back-btn" text="Back to Catalog"/>
            </Link>
            <Button className="add-btn" text="Continue"/>
        </div>
    </div>)
}

export default Cart;