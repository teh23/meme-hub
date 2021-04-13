import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap/";

const Li = styled.div`
    height: 40px;
    padding-top: 5px;
    color: #939393;

    :hover {
        color: #111111;
        background-color: #f1f1f1;
    }
`;

const List = (props) => {
    return <div {...props}>{props.children}</div>;
};

const ListItem = (props) => {
    return (
        <>
            <Li {...props}>{props.children}</Li>
        </>
    );
};

export { List, ListItem };
