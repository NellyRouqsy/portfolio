import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = (props) => {
    return (
        <Card className={`prj ${props.style}`}>
            <div>
                <h1>{props.head}</h1> 
                
            </div>
            <p>{props.text}</p>
            <div className="links"><a href={props.url}><img src="src\assets\bxl-github.svg.svg" alt="" /></a>
                <a href={props.link}>Project site</a>
            </div>
        </Card>
    );
};
export default Project


const Card = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 20px;
    .links{
        margin-left: 20px;
        display: flex;
        gap: 20px;
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