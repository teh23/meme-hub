import React from 'react'
import styled from "styled-components";
const Img = styled.img`
    width: 400px;
`;
const PostImage = ({src}) => {
    return (
        <div className="d-flex flex-row mt-3">
                <Img
                    src={src}
                    alt="mm"
                    className="rounded"
                />
            </div>
    )
}

export default PostImage
