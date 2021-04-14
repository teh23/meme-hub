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

    const {tag = true} = props

    if (tag === true) {
        const string = props.children.replace(/\s/g, "");
        const headString = string.charAt(0);
        const tailString = string.slice(1);
        return (
            <>
                <Li {...props}>
                    <strong>
                        <span className="text-muted mr-1 ">{headString}</span>
                    </strong>
                    {tailString}
                </Li>
            </>
        );
    }
    return (
        <>
            <Li {...props}>{props.children}</Li>
        </>
    );
};

ListItem.props = {
    tag: true,
};

export { List, ListItem };
