import styled from "styled-components";

const About = () => {
    return (
        <div id="about">
            <Content>
                <div className="about">
                    <h1>ABOUT ME</h1>
                </div>
                <div className="info">
                    <h1>I am a front-end developer based in Lagos Nigeria. </h1>
                    <p>Hi there! My name is Adedokun Farouq Adetunji. I am an aspiring full-stack engineer from Lagos, Nigeria. The fact that I could actually create something that can impact millions of people pushed me into this field and also the fact that I can actually solve world problems. 
                        I hope to build apps that not only work well but also look good.
                        I have interest in building technologies for other developers to use. I’m eager to meet and network with a lot of people, so feel free to connect with me!
                    </p>
                </div>
            </Content>

            <a href="/#more">More About Me</a>
        </div>
    );
};

export default About;

const Content = styled.div`
    width: 90%;
    margin: 0px auto;
    display: flex ;
    justify-content: space-around;
    .about{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .info{
        width: 700px;
        h1{
            text-align: center;
        }
        p{
            font-weight: 300;
        }
    }
`