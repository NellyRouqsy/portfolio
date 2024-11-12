import styled from "styled-components";
import Img1 from "../assets/vscode-icons_file-type-html.svg"
import Img2 from "../assets/vscode-icons_file-type-css.svg"
import Img3 from "../assets/vscode-icons_file-type-js-official.svg"
import Img4 from "../assets/vscode-icons_file-type-vscode.svg"
import Img5 from "../assets/akar-icons_github-fill.svg"
import Img6 from "../assets/logos_react.svg"
import Img7 from "../assets/styled-components.png"

const HomeTwo = () => {
    return (
        <Content>
        <hr />
        <h1>My Tech Stack</h1>
        <p>Technologies I've been working with recently</p>
        <LogoImg>
            <div className="flex1">
                <img src={Img1} alt="" />
                <img src={Img2} alt="" />
                <img src={Img3} alt="" />
                <img src={Img4} alt="" />
            </div>
            <div className="flex2">
                <img src={Img5} alt="" />
                <img src={Img6} alt="" />
                <img src={Img7} alt="" />
                <img src={Img8} alt="" />
            </div>
            
           
        </LogoImg>
            
        </Content>
    );
};

export default HomeTwo;


const Content = styled.div`
    width: 90%;
    align-items: center;
    margin: 0px auto;
    text-align: center;
`
const LogoImg = styled.div`
    margin: 0px auto;
    @media (max-width: 800px) {
        margin: 0px auto;
    }
.flex1{
    margin-top: 20px;
    display: flex;
    gap: 250px;
    justify-content: center;
    @media (max-width: 800px) {
        padding-top: 30px;
        display: flex;
        margin: 0px auto;
        width: 90%;
        gap: 50px;
    }
}
.flex2{
    margin-top: 50px;
    display: flex;
    gap: 250px;
    justify-content: center;
    @media (max-width: 800px) {
        padding-top: 50px;
        display: flex;
        margin: 0px auto;
        width: 90%;
        gap: 50px;
    }
}
img{
    height: 50px;
    width: 50px;
    transition: transform;
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }

}
`
