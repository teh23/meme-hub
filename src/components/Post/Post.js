import React from "react";
import styled from "styled-components";
import PostTag from "./PostTag";
import PostTitle from "./PostTitle";
import {Transition} from 'react-transition-group';
import PostButtons from "./PostButtons";
import PostImage from "./PostImage";




const PostDiv = styled.div`
    border-bottom: 1px solid #d3d3d3;

    
`


const Post = (props) => {
    const {likes, src, time} = props
    return (
        <PostDiv className="ml-2 mr-2 mt-5 ">
            <div className="d-flex flex-row justify-content-between">
                <PostTitle>asdasd lok at ths </PostTitle>
                <PostTag href="#123" data={time}>
                    #zabawa
                </PostTag>
            </div>
            <PostImage src={src}/>
            
            <PostButtons likes={likes}/>

            
        </PostDiv>
    );
};

export default Post;
