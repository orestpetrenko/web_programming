import React, { useState, useEffect } from "react";
import Navigation from "./navigation";
import Filter from "./filter";
import Footer from "./footer";
import Cars from "./cars";
import { useLocation, useNavigate } from "react-router-dom";
import useFetchCars from "../FetchCar";

function CatalogPage() {
    const { cars, loading, error } = useFetchCars();
    const [searchFilter, setSearchFilter] = useState("");
    const [sortCriteria, setSortCriteria] = useState("");
    const [filteredData, setFilteredData] = useState(cars.slice(0, 4));
    const [filtering, setFiltering] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!loading && cars.length > 0) {
            setFilteredData(getFilteredData());
        }
    }, [cars, searchFilter, sortCriteria, loading]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const sort = params.get("sort");

        if (sort) {
            setSortCriteria(sort);
        }
    }, [location]);

    const getFilteredData = () => {
        let filtered = [...cars.slice(0, 4)];

        if (searchFilter) {
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(searchFilter.toLowerCase())
            );
        }

        if (sortCriteria) {
            if (sortCriteria === "Name") {
                filtered.sort((a, b) => a.title.localeCompare(b.title));
            } else if (sortCriteria === "Price") {
                filtered.sort((a, b) => Number(a.price) - Number(b.price));
            } else if (sortCriteria === "Power") {
                filtered.sort((a, b) => (a.power || 0) - (b.power || 0));
            }
        }
        return filtered.slice(0, 4);
    };

    const handleSearch = (searchTerm) => {
        setSearchFilter(searchTerm);
    };

    const handleSort = (criteria) => {
        setSortCriteria(criteria);
        navigate(`?sort=${criteria}`);
    };

    const handleApplyFilter = () => {
        setFiltering(true); 
        const filteredResults = getFilteredData();
        setFilteredData(filteredResults);
        setTimeout(() => {
            setFiltering(false);
        }, 2000);
    };

    return(<div>
        <Navigation onSearch={handleSearch}/>
        <Filter onSort={handleSort} onApply={handleApplyFilter}/>
        {filtering ? (
            <div className="loader">Loading...</div>
        ) : (
            <Cars limit={4} data={filteredData} />
        )}
        <Footer />
    </div>)
}

export default CatalogPage;