import React from "react";
import styled from "styled-components";
import PostTag from './PostTag'
const Img = styled.img`
    width: 400px;
`;



const Post = () => {
    return (
        <>
            <PostTag className="" data="5h">#zabawa</PostTag>
            <h5 >
                <strong>Look aat thisssss</strong>
            </h5>
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
