import React from "react";
import styled from "styled-components";
import {ListItem} from '../components/List'
const Img = styled.img`
    width: 400px;
`;

const Post = () => {
    return (
        <>
        <div className="d-flex flex-row"><ListItem >#nowyfajny</ListItem></div>
        <h5>Title</h5>
        <div className="d-flex flex-row ">
            <Img
                src="https://www.wykop.pl/cdn/c3201142/comment_1618401103sNm3uIZis7reZAOwmHaF5P.jpg"
                alt="mm"
                className=""
            />
        </div>
        </>
    );
};

export default Post;
