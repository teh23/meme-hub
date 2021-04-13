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
                    
                    <Col>{children}</Col>
                    <Col className="" lg={3}>
                        <TagsMenu />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Layout;
