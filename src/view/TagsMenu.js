import React from "react";
import { Card, ListGroup } from "react-bootstrap/";
import { List,  ListItem} from "../components/List";
import Box from "../components/Box"
import Header from "../components/Header"
const TagsMenu = () => {
    return (
        <Box>
            <Header>TAGS MENU</Header>
            <List>
                <ListItem>#malosmieszne</ListItem>
                <ListItem>#musibycsmieszne</ListItem>
                <ListItem>#musibycsmieszne</ListItem>
                <ListItem>#musibycsmieszne</ListItem>
                <ListItem>#musibycsmieszne</ListItem>
                <ListItem>#musibycsmieszne</ListItem>
            </List>
        </Box>
    );
};

export default TagsMenu;
