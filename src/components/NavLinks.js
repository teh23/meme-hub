import React from "react";
import {  Nav } from "react-bootstrap/";
const NavLinks = ({ text, icon }) => {
    return (
        <Nav.Link variant="outline-dark" eventKey={2} >
            <i className={icon} aria-hidden="true"></i>
            <span className="ml-2">{text}</span>
        </Nav.Link>
    );
};

export default NavLinks;
