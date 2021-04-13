import React from "react";
import { Container, Col, Row, Button, Navbar, Nav } from "react-bootstrap/";
import NavLinks from "../components/NavLinks";

const Header = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                {" "}
                <Navbar.Brand className="" href="#">
                    <img className="mr-2" alt="logo" src="https://raw.githubusercontent.com/iliana/html5nyancat/master/nyan1.svg"/>
                    <strong>MEMHUB </strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="right-side">
                        <NavLinks icon="fa fa-home" text="Home" />
                        <NavLinks icon="fa fa-plus" text="Add pic" />
                        <NavLinks icon="fa fa-github" text="Github" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
