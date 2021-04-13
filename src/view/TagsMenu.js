import React from "react";
import { Card, ListGroup } from "react-bootstrap/";
import { List, Div, ListItem} from "../components/List";
import Box from "../components/Box"
import Header from "../components/Header"

const TagsMenu = () => {

    return (
        <Box>
            <Header>TAGS MENU</Header>
            <List>
                <ListItem tag={true}>#asd</ListItem> 
                <ListItem tag={true}>#musibycsmieszne</ListItem>
                <ListItem tag={true}>#ads</ListItem>
                <ListItem tag={true}>#musibycsmieszne</ListItem>
                <ListItem tag={true}>#musibycsmieszne</ListItem>
                <ListItem tag={true}>#musibycsmieszne</ListItem>
            </List>
        </Box>
    );
};

export default TagsMenu;
