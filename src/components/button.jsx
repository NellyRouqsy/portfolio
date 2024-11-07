import styled from "styled-components";
const Button = (props) => {
    return (
        <Bttn className={`btn ${props.style}`}>
            <p>{props.text}</p>
        </Bttn>
    );
};

export default Button;


const Bttn = styled.button`
.b{

}`
