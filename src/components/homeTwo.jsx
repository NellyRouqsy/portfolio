import styled from "styled-components";

const HomeTwo = () => {
    return (
        <Content>
        <hr />
        <h1>My Tech Stack</h1>
        <p>Technologies I've been working with recently</p>
        <LogoImg>
            <div className="flex1">
                <img src="src\assets\vscode-icons_file-type-html.svg" alt="" />
                <img src="src\assets\vscode-icons_file-type-css.svg" alt="" />
                <img src="src\assets\vscode-icons_file-type-js-official.svg" alt="" />
                <img src="src\assets\vscode-icons_file-type-vscode.svg" alt="" />
            </div>
            <div className="flex2">
                <img src="src\assets\akar-icons_github-fill.svg" alt="" />
                <img src="src\assets\logos_react.svg" alt="" />
                <img src="src\assets\styled-components.png" alt="" />
                <img src="src\assets\typescript-official-svgrepo-com.svg" alt="" />
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
.flex1{
    margin-top: 20px;
    display: flex;
    gap: 250px;
    justify-content: center;
    @media (max-width: 800px) {
        margin-top: 30px;
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
        margin-top: 50px;
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
