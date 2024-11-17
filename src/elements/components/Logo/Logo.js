import { Navbar } from "react-bootstrap";

import LogoImg from "./log.svg"

import "bootstrap/dist/css/bootstrap.min.css";

function Logo() {
    return <Navbar.Brand style={{lineHeight:"30px"}}>
        <img
            src={LogoImg}
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt= "Logo" />
        Top-Garage
    </Navbar.Brand>;
}

export default Logo;