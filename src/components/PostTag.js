import styled from "styled-components";

const Span = styled.span`
    font-size: 14px;
`;
const ATag = styled.a`
    color: #939393;
  

    :hover {
        color: #111111;
        text-decoration: none;
    }
`;

const PostTag = (props) => {
    const { data = "2h", href = "#" } = props;

    const formatData = () => {
        //TODO
    };
    const { tag = true } = props;

    if (tag === true) {
        const string = props.children.replace(/\s/g, "");
        const headString = string.charAt(0);
        const tailString = string.slice(1);
        return (
            <div className={`d-flex flex-row mb-2 ${props.className}`}>
                <ATag href={href}>
                    <strong>
                        <Span className="text-muted mr-1 ">{headString}</Span>
                    </strong>
                    <Span>{tailString}</Span>
                    <Span className="text-muted ml-2">
                    <small>· {data}</small>
                </Span>
                </ATag>
                
            </div>
        );
    }

    return (
        <div className={`d-flex flex-row ${props.className}`}>
            <ATag href="#">{props.children}</ATag>
            <span className="text-muted ml-2">.</span>
            <span className="pt-1 ml-1 text-muted">
                <small>{data}</small>
            </span>
        </div>
    );
};

export default PostTag;
