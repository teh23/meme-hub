import React from "react";
import Header from "./Header";
import { Container, Col, Row } from "react-bootstrap/";
import TagsMenu from "./TagsMenu";
import {Div} from "../components/List"

const Layout = ({ children }) => {
    return (
        <>
            <Header></Header>

            <Container>
                <Row>
                    
                    <Col lg={9} className="order-sm-1">{children}</Col>
                    <Col className="order-sm-0 order-first order-lg-last" >
                        <TagsMenu />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Layout;
