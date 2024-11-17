import 'bootstrap/dist/css/bootstrap.min.css';
import DataContext from 'data/Context';
import { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TileCard from './TileCard/TileCard';

import MainImage from './image.png';
import ProductCard from '../Catalog/Products/ProductCard/ProductCard';

function Home(props) {
    const products = useContext(DataContext).value;
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();

    useEffect(loadMore, []);

    function loadMore() {
        if (products.length <= rows.length || rows.length > 12) {
            navigate("/catalog");
        } else {
            let mrows = products.slice(0, 3 + rows.length);
            setRows(mrows);
        }
    }

    return (
        <Container as="main">
            <Row className='justify-content-stretch my-5 pb-5'>
                <Col lg={4}>                   
                    <Image src={MainImage} alt='Car Showroom' rounded fluid />
                </Col>
                <Col lg={8} className='d-flex flex-column px-5 py-2 justify-content-center'>
                    <h1>Welcome to Car Hub – Your Ultimate Destination for Quality Cars</h1>
                    <p className='fs-5'>
                        Discover a wide range of top-tier vehicles, tailored to fit your lifestyle and budget.
                    </p>
                </Col>
            </Row>
            <h3 className='text-center'>Popular Cars</h3>
            <Row className='flex-wrap justify-content-between'>
                {rows.map((val) => <TileCard data={val} key={val.id} />)}
            </Row>
                
            <Row className='justify-content-center mb-5'>
                <Button variant='primary' size='lg' className='w-auto px-5' onClick={loadMore}>
                    View More
                </Button>
            </Row>
        </Container>
    );
}

export default Home;
