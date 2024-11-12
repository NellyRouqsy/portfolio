import styled from "styled-components";
import Button from "./button";
import Img1 from "../assets/github-color-svgrepo-com.svg"
import Img2 from "../assets/linkedin-1-svgrepo-com.svg"
import Img3 from "../assets/IMG-20240902-WA0069-removebg-preview.png"

const HomeOne = () => {
    return (
        <Home>
            <HomeOneText>
                <h1>HI, I AM <br />ADEDOKUN FAROUQ .</h1>
                <p className="desktop1">A Lagos based aspiring full-stack software developer passionate about building
                    accessable,scalable and user friendly websites.
                </p>
                <p className="mobile1">A Lagos based aspiring full-stack software developer passionate 
                about building accessable,scalable and
                user friendly websites.
                </p>
                <Text>
                    <Button text="CONTACT ME" style="btn1"/>
                    <a href="https://github.com/NellyRouqsy"><img src={Img1} alt="" /></a>
                    <a href="https://www.linkedin.com/in/farouq-adedokun"><img src={Img2} alt="" /></a>
                </Text>
            </HomeOneText>
            <HomeOneImg>
                <img src={Img3} alt="" />
            </HomeOneImg>
            
        </Home>
    );
};

export default HomeOne;

const Home = styled.div`
    display: flex;
    gap: 300px;
    justify-content: center;
    width: 90%;
    height: 100vh;
    margin: 0px auto;
    transform: translateX(-100%);
    animation: slide-in 2s forwards;
    @keyframes slide-in {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    }
    @media (max-width: 800px) {
        display: grid;
        width: 90%;
    }
`
const Text = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    .btn1{
        background-color: rgb(18,117,177);
        border-radius: 15px;
        border: none;
        height: 30px;
        width: 150px;
        font-size: 15px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        @media (max-width: 800px) {
            margin-left: 30%;
            display: flex;
            justify-content: center;
            margin-top: 10px;
            align-items: center;
        }
    }
    img{
        width: 20px;
        height: 20px;
        background-color: inherit;
        border-radius: 50%;
        cursor: pointer;
      
    }
`
const HomeOneText = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .mobile1{
        display: none;
    }
    h1{
        font-weight: 900;
        font-size: 40px;
        width: 450px;
    }
    p{
        font-weight: 200px;
        font-size: 1rem;
    }
    @media (max-width: 800px) {
        display: block;
        margin: 0px auto;
        /* text-align: center; */
        .desktop1{
            display: none;
        }
        .mobile1{
            display: block;
            line-height: 20px;
        }
        h1{
            font-size: 25px;
            text-align: center;
        }
        p{
            width:80%;
            margin:0px auto;
            text-align: center;
        }
    }
`
const HomeOneImg = styled.div`
    img{
        height: 500px;
        width: 400px;
        border-radius: 10px;
    }
    @media (max-width: 800px) {
        margin-top: -400px;
        display: flex;
        justify-content: center;
        img{
            margin: 0px auto;
            width: inherit;
        }
    }
    
`
// const Button = styled.div``
