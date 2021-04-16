import React, {useEffect} from "react";
import { Card, ListGroup } from "react-bootstrap/";
import { List, Div, ListItem} from "../components/List";
import Box from "../components/Box"
import Header from "../components/Header"
import {useDispatch, useSelector} from "react-redux";
import {fetchTags} from "../features/tags/tagsSlice";
import Loading from "../components/Loading";

const TagsMenu = () => {
    const dispatch = useDispatch()
    const tags = useSelector(state => state.tags.tags[0])
    const tagsStatus = useSelector(state => state.tags.status)
    useEffect(() =>{
        if (tagsStatus === "idle"){
            dispatch(fetchTags())
        }
    }, [tagsStatus, dispatch])


    if (tagsStatus === "loading" || tagsStatus === "idle"){
        return(
            <Loading/>
        )
    }

    return (
        <Box>

            <Header>TAGS MENU</Header>
            <List>
                {tags.map( (row) =>{
                    return(
                        <ListItem howManyUsed={3} tag={true} key={row.title}>{`#${row.title}`}</ListItem>
                    )
                })}
            </List>
        </Box>
    );
};

export default TagsMenu;
