import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get("http://localhost:3000/cars");
                setCars(response.data);
            } catch (error) {
                setError(error.response ? error.response.data.message : error.message);
            } finally {
                setTimeout(() => setLoading(false), 1000);
            }
        };
        fetchCars();
    }, []);

    return { cars, loading, error };
};

export default useFetchCars;
