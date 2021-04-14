import React from "react";
import styled from "styled-components";
import PostTag from './PostTag'
const Img = styled.img`
    width: 400px;
`;

const PostTitle = () =>{

}

const Post = () => {
    return (
        <div className="ml-2 mr-2">
            <PostTag href="#123" data="5h">#zabawa</PostTag>
            <h5 className="mb-2">
                <strong>Look aat thisssss</strong>
            </h5>
            <div className="d-flex flex-row mt-3">
                <Img
                    src="https://www.wykop.pl/cdn/c3201142/comment_1618401103sNm3uIZis7reZAOwmHaF5P.jpg"
                    alt="mm"
                    className=""
                />
            </div>
        </div>
    );
};

export default Post;
