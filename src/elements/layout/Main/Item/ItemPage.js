import DataContext from "data/Context";
import FilteringColumn from "elements/components/FormColumn/FilteringColumn";
import NumInput from "elements/components/FormColumn/NumInput/NumInput";
import TextWithGap from "elements/components/TextWithGap/TextWithGap";
import { useContext, useState } from "react";
import { Col, Row, Carousel, Container, Form, Button } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";

import './ItemPage.scss';

export default function ItemPage() {
    let id = useLoaderData();
    let dec = useContext(DataContext).value.find((val) => val.id == id);
    let nav = useNavigate();
    const [amount, setAmount] = useState(0);
    let classesForGap = "border-dotted mx-4";
    return (
        <Container className="mt-2">
            <Row className="mb-5">
                <Col>
                    <Carousel slide={false}>
                        {dec.imageUrls.map((val, index) => <Carousel.Item key={index}>
                            <img src={val} className="d-block w-100" style={{ objectFit: "cover", height: 500 }} />
                        </Carousel.Item>)}
                    </Carousel>
                </Col>
                <Col className="d-flex flex-column">
                    <h1>{dec.name}</h1>
                    <p>
                        {dec.description}
                    </p>
                    <div className="flex-grow-1" />
                    <NumInput label={`Amount(max: ${dec.amountAvalaible})`} state={[amount, setAmount]} />
                </Col>
            </Row>
            <h4 className="text-center text-secondary">Characteristics</h4>
            <Row className="mb-4">
                <Col className="me-5">
                    <TextWithGap start={"Name"} end={dec.name} classesForGap={classesForGap} />
                    <TextWithGap start={"Colors"} end={dec.colors} classesForGap={classesForGap} />
                </Col>
                <Col>
                    <TextWithGap start={"Length"} end={`${dec.length} cm`} classesForGap={classesForGap} />
                    <TextWithGap start={"Power"} end={`${dec.name} watts`} classesForGap={classesForGap} />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex align-items-center">
                    <span className="fw-semibold fs-5">{`Price: $ ${dec.price}`}</span>
                </Col>

                <Col className="d-flex justify-content-end">
                <Button variant="outline-primary width-form me-4" onClick={()=>nav(-1)}>Go back</Button>
                <Button variant="primary width-form">Add to cart</Button>
                </Col>

            </Row>

            <div style={{height: 100}}/>
        </Container>
    );
}