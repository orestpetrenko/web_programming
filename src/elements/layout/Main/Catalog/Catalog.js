import DataContext from "data/Context";
import { useContext, useState } from "react";
import FilteringTab from "./FilteringTab/FilteringTab";
import Products from "./Products/Products";

function Catalog() {
    // Отримуємо початковий список автомобілів
    let defaultCars = useContext(DataContext).value;

    // Встановлюємо стан із списком автомобілів
    const [cars, setCars] = useState(Object.assign(defaultCars));

    function getDefaultCars() {
        return Object.assign(defaultCars);
    }

    return (
        <main>
            <FilteringTab getDefaultCars={getDefaultCars} setCars={setCars} />
            <Products cars={cars} />
        </main>
    );
}

export default Catalog;
