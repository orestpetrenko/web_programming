import { Link } from "react-router-dom";

import { Col, Container, Nav, Navbar } from "react-bootstrap";

import Logo from "elements/components/Logo/Logo";

import FLink from "elements/components/FLink/FLink";

import './Navigation.css';

function Navigation() {
    return (

        <Navbar className="px-1 border-bottom border-dark" expand="lg" bg="light" >
            <Container>
                <Col><Logo /></Col>
                <Navbar.Toggle aria-controls="navbar-collapse-section" />
                <Navbar.Collapse id="navbar-collapse-section" className="justify-content-center">
                    <Nav className="nav-buttons-parent align-items-center" as='ul'>
                        <Nav.Item as="li">
                            <FLink to="/">
                                <Nav.Link as="span">Home</Nav.Link>
                            </FLink>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <FLink to="/catalog">

                                <Nav.Link as="span">Catalogue</Nav.Link>
                            </FLink>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link>Cart</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Col className="d-none d-lg-block" />
            </Container>
        </Navbar>
    );
}

export default Navigation;