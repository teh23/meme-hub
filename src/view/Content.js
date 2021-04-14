import React from 'react'
import Box from "../components/Box"
import Header from "../components/Header"
import Post from '../components/Post/Post'


const Content = () => {
    return (
        <Box>
            {/* <Header className="h3">MEMM'S</Header> */}
            <Post likes={2} time={"2h"} src={"https://www.wykop.pl/cdn/c3201142/comment_1618401103sNm3uIZis7reZAOwmHaF5P.jpg"}/>
            <Post likes={2} time={"5h"} src={"https://www.wykop.pl/cdn/c3201142/comment_1618401103sNm3uIZis7reZAOwmHaF5P.jpg"}/>
        </Box>
    )
}

export default Content
