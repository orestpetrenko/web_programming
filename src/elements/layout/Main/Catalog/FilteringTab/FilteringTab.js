import { useState } from "react";
import { Container, Row, Form, Col } from "react-bootstrap";
import ApplyBtn from "./ApplyBtn/ApplyBtn";

import RangeInput from "../../../../components/FormColumn/RangeInput/RangeInput";
import SearchInput from "../../../../components/FormColumn/SearchInput/SearchInput";
import SelectInput from "../../../../components/FormColumn/SelectInput/SelectInput";

import './FilteringTab.scss';

// Оновлені опції сортування
const options = ["Popular", "More expensive", "Cheaper", "Year"];

function FilteringTab({ getDefaultCars, setCars }) {
    const [priceRange, changePriceRange] = useState({ from: undefined, to: undefined });
    const [yearRange, changeYearRange] = useState({ from: undefined, to: undefined });
    const [sorting, changeSorting] = useState(0);
    const [search, setSearch] = useState("");

    const callback = () => {
        console.log(priceRange);
        console.log(yearRange);
        console.log(sorting);
        
        let cars = getDefaultCars();
        if (priceRange.from !== undefined) cars = cars.filter((car) => car.price > priceRange.from);
        if (priceRange.to !== undefined) cars = cars.filter((car) => car.price < priceRange.to);
        if (yearRange.from !== undefined) cars = cars.filter((car) => car.year > yearRange.from);
        if (yearRange.to !== undefined) cars = cars.filter((car) => car.year < yearRange.to);

        switch (Number(sorting)) {
            case 0:
                cars = cars.sort((a, b) => a.id - b.id);
                break;
            case 1:
                cars = cars.sort((b, a) => a.price - b.price);
                break;
            case 2:
                cars = cars.sort((b, a) => b.price - a.price);
                break;
            case 3:
                cars = cars.sort((b, a) => a.year - b.year);
                break;
        }

        cars = cars.filter((car) => car.name.toLowerCase().includes(search.trim().toLowerCase()));

        console.log(cars);

        setCars(cars);
    };

    return (
        <Container fluid as="form" className="border-bottom border-dark">
            <Row className="px-5">
                <RangeInput label="Price" state={[priceRange, changePriceRange]} />
                <RangeInput label="Year" state={[yearRange, changeYearRange]} />
                <SelectInput label="Sort by" options={options} state={[sorting, changeSorting]} />
                <SearchInput label="Search" state={[search, setSearch]} />
                <Col className="flex-grow-1" />
                <ApplyBtn onClick={callback} />
            </Row>
        </Container>
    );
}

export default FilteringTab;
