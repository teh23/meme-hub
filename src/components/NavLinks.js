import React from "react";
import {  Nav } from "react-bootstrap/";
const NavLinks = ({ text, icon }) => {
    return (
        <Nav.Link variant="outline-dark" eventKey={2} >
            <i class={icon} aria-hidden="true"></i>
            <span class="ml-2">{text}</span>
        </Nav.Link>
    );
};

export default NavLinks;
