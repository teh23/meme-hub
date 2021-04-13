import React from "react";
import { Container, Col, Row, Button, Navbar, Nav } from "react-bootstrap/";

const Header = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                {" "}
                <Navbar.Brand className="" href="#">
                    <strong>MEMHUB </strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="right-side">
                        <Nav.Link className={"mr-2"} href="#">
                            Home
                        </Nav.Link>
                        <Nav.Link
                            variant="outline-dark"
                            eventKey={2}
                            href="#memes"
                        >
                            <i class="fa fa-github" aria-hidden="true"></i>
                            <span class="ml-2">Project</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
