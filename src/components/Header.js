import styled from 'styled-components'
import { Row } from "react-bootstrap/";

const HeaderStyled = styled.div`
    height: 45px;
    border-bottom: 1px solid #d3d3d3;
    
`

const Header = (props) => {
    return(
        <HeaderStyled className="h5 mr-auto" {...props}>
            <strong>{props.children}</strong>
        </HeaderStyled>
    )
}

export default Header