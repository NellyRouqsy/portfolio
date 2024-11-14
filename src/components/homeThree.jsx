import styled from "styled-components";
import Project from "./project";

const HomeThree = () => {
    return (
        <Content>
            <div id="work" className="word">
                <h1>MY WORKS</h1>
            </div>
            <ContentCard>
                <Project head="Nexcent" url="https://github.com/NellyRouqsy/nexcent" link="https://nellyrouqsy.github.io/nexcent/" text="This project is a sructured website with immersive layout built using HTML and CSS while utilizing figma design template to implement styling." style="style1"/>
                <Project head="Furniro" url="https://github.com/NellyRouqsy/furniro" link="https://nellyrouqsy.github.io/furniro/" text=" This project is an e-commerce website with immersive layout built using HTML and CSS while utilizing figma design to implement styling." style="style1"/>
                <Project head="Space Tourism" url="https://github.com/NellyRouqsy/Space-Tourism" link="https://nellyrouqsy.github.io/Space-Tourism/" text="This project is an introduction to using different HTML files in one project and it is a user friendly website built with HTML and CSS. " style="style1"/>  
                <Project head="Calculator" url="https://github.com/NellyRouqsy/Calculator" link="https://nellyrouqsy.github.io/Calculator/" text="This project was my intoduction to javascripts and it performs basic mathematical operations. It is designed to handle user input and display real-time results." style="style1"/>
                <Project head="Countries API" url="https://github.com/NellyRouqsy/countries-api" link="https://nellyrouqsy.github.io/countries-api/" text="This project demonstrates how to fetch data from an API and convert it into JSON format to display a list of countries. The list can be filtered by region and also by serach." style="style1"/>
                <Project head="Add-To-Cart" url="https://github.com/NellyRouqsy/add-to-cart" link="https://nellyrouqsy.github.io/add-to-cart/" text="This project is an e-commerce style website that is  developed for a fictional dessert restaurant, featuring visually appealing product listings and an intuitive cart system." style="style1"/>
                <Project head="Remote-Work" url="https://github.com/NellyRouqsy/remote-work--react" link="https://remote-work-react.vercel.app/" text="This project was my introduction to React and it is a user-friendbuilt using HTML, CSS and React and made interactive with JavaScript." style="style1"/>  
                <Project head="Coolors" url="https://github.com/NellyRouqsy/coolors" link="https://coolors-sable.vercel.app/" text="Coolors is a cloned project that was done using React.js, Javascript and Styled components to get the smooth flow and easy interaction." style="style1"/>
                <Project head="Kuda-clone" url="https://github.com/NellyRouqsy/Kuda" link="https://kuda-aodo.vercel.app/" text="This project is a kuda landing page replica built with react.js and styled component to create dynamic user interfaces." style="style1"/>
               
             
            </ContentCard>

        </Content>
    );
};

export default HomeThree;


const Content = styled.div`
    max-width: 90%;
    margin: 0px auto;
    .word{
        display: flex;
        justify-content: center;
    }
    
    @media (max-width: 800px) {
        display: grid;
        width: 100%;
    }
`

const ContentCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    gap: 30px;

    .style1{
        padding: 10px;
        h1{
            font-size: 30px;
        }
        p{
            font-size: 18px;
            font-weight: 300;
            line-height: 32px;
        }   
        
    }
    @media (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;
        h1{
            font-size: 25px;
        }
}
`