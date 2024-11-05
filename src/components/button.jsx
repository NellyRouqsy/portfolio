import styled from "styled-components";
import { LuDot } from "react-icons/lu";
const Button = (props) => {
    return (
        <Bttn className={`btn ${props.style}`}>
            <p>{props.text}</p>
            {/* <h1><LuDot /></h1> */}
        </Bttn>
    );
};

export default Button;


const Bttn = styled.button`
.b{

}`
