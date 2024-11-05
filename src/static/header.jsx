import { RxHamburgerMenu } from "react-icons/rx";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
    
    const Details = ()=>{

    };
    return (
        <Wrapper>
            <Head>
            <Link to= "/">
                <img src="src\assets\6537271.png" alt="" />
            </Link>
            <Content>
                <a href="/#work">Work</a>  
                <a href="/#about">About</a>          
                <a href="/#contact">Contact</a>
            </Content>
            <RxHamburgerMenu id="burger"/>
            </Head>
            
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    height: 70px;
    a{
        text-decoration: none;
        color: inherit;
    }
    
`
const Head = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 0px auto;
    z-index: 10;
    height: inherit;
    align-items: center;
    img{
        height: 100px;
    }
    #burger{
        width: 30px;
        font-size: xx-large;
        display: none;

    @media (max-width: 800px) {
        display: block;
    }
}
`
const Content = styled.div`
    display: flex;
    justify-content: space-around;
    width: 200px;

@media (max-width: 800px) {
    display: none;
}
`

