import React from "react";
import styled from "styled-components";
import {Row} from "react-bootstrap/";

const Li = styled.div`
  height: 40px;
  padding-top: 5px;
  color: #939393;

  :hover {
    color: #111111;
    background-color: #f1f1f1;
  }
`;

const Dot = styled.div`
  height: 30px;
  width: 30px;
  background-color: #e5e5e5;
  border-radius: 50%;
 
`


const List = (props) => {
    return <div {...props}>{props.children}</div>;
};

const ListItem = (props) => {

    const {tag = true, howManyUsed} = props

    if (tag === true) {
        const string = props.children.replace(/\s/g, "");
        const headString = string.charAt(0);
        const tailString = string.slice(1);
        return (
            <>
                <Li {...props} className="d-flex flex-row justify-content-between">
                    <div>
                        <strong>
                            <span
                                className="text-muted mr-1 ">{headString}</span>
                        </strong>
                        {tailString}
                    </div>
                    <Dot className="d-flex justify-content-center align-self-center mb-1">
                        <span className="d-flex "><small className="text-dark" style={{marginTop:"7px", fontSize:"10px"}}>{howManyUsed}</small></span>
                    </Dot>

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

export {List, ListItem};
