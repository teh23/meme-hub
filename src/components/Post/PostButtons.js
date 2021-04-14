import React from 'react'
import styled from 'styled-components'
const Share = styled.div`
    display: box;
    padding: 5px;
    
    :hover{
        font-size: 18px;
    }
`
const Like = styled.div`
    display: box;
    padding: 5px;
    
    :hover{
        font-size: 18px;
    }
`

const PostButtons = ({likes}) => {
    return (
        <div className="d-flex flex-row mt-3 border-top-2 mb-5 border-dark">
                <Like>
                    <i className={"fas fa-heart fa-lg"} aria-hidden="true"></i>
                    <span className="ml-2">
                        <span className="text-muted">{likes}</span>
                        <span>
                         {" "}Likes
                        </span>
                    </span>
                </Like>
                <Share className="ml-3">
                    
                <i className={"fas fa-share fa-lg"} aria-hidden="true"></i>
                    <span className="ml-2">
                        
                        <span>Share</span>
                    </span>
                </Share>
            </div>
    )
}

export default PostButtons
