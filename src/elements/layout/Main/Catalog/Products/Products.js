import DataContext from "data/Context";
import { useContext } from "react";
import ProductCard from "./ProductCard/ProductCard";

function Products({ cars }) {
    return (
        <section className="d-flex flex-wrap p-5">
            {cars.map(car => <ProductCard key={car.id} data={car} />)}
        </section>
    );
}

export default Products;
