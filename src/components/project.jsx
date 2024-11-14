import styled from "styled-components";
const Project = (props) => {
    return (
        <Card className={`prj ${props.style}`}>
            <div>
                <h1>{props.head}</h1> 
                
            </div>
            <p>{props.text}</p>
            <div className="links">
                <a href={props.url}>View Code</a>
                <a href={props.link}>Live Preview</a>
            </div>
        </Card>
    );
};
export default Project


const Card = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    p{
        font-size: 5px;
    }
    .links{
        display: flex;
        justify-content: space-between;
        align-items: center;
        a{
            text-decoration: none;
            color: inherit;
            cursor: pointer;
            display: flex;
            justify-content: center;
        }
        img{
            display: flex;
            justify-content: center;
        }
    }
`