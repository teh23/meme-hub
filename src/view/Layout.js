import React from "react";
import Header from "./Header";
import { Container, Col, Row } from "react-bootstrap/";
import TagsMenu from "./TagsMenu";

const Layout = ({ children }) => {
    return (
        <>
            <Row>
                <Header></Header>
            </Row>
            <Container>
                <Row>
                    <Col className="bg-dark" xs={2}>
                        <TagsMenu />
                    </Col>
                    <Col className="bg-primary">{children}</Col>
                    <Col xs={2} className="bg-secondary"></Col>
                </Row>
            </Container>
        </>
    );
};

export default Layout;
