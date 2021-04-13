import React from "react";
import Header from "./Header";
import { Container, Col, Row } from "react-bootstrap/";

const Layout = () => {
    return (
        <Container>
            <Row>
                <Header></Header>
            </Row>
            <Row>
                <Col className="bg-dark" xs={3}>dsa</Col>
                <Col className="bg-color-red">gadfad</Col>
            </Row>
        </Container>
    );
};

export default Layout;
