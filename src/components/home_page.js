import React from "react";
import imgGarage from "../img/cargarage.png";

const HomePage = () => {
    return (
        <main className="home">
            <img className="home-img" src={imgGarage}/>
            <div className="home-description">
                <h1 className="title">TopGarage</h1>
                <p className="description">Якість, надійність, інновації – ось що характеризує наш Garage. 
                    Наш автосалон пропонує широкий асортимент автомобілів, які стануть надійними помічниками в будь-яких 
                    умовах: від вікендних подорожей до щоденної праці.</p>
            </div>
        </main>
    )
}

export default HomePage;