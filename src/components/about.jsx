import styled from "styled-components";

const About = () => {
    return (
        <About_info id="about">
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
                    <a href="/#more">More About Me</a>

                    <img src="" alt="" />
                    <hr id="line"/>
                </div>
            </Content>
        </About_info>
    );
};

export default About;

const About_info = styled.div`
    width: 90%;
    margin: 0px auto;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 800px) {
        display: grid;
        margin: 0px auto;
    }
`
const Content = styled.div`
    display: flex ;
    gap: 200px;
    .about{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
    }
    .info{
        width: 700px;
        margin: 0px auto;
        h1{
            text-align: center;
        }
        p{
            font-weight: 300;
        }
    }
    @media (max-width: 800px) {
        width: 90%;
        margin: 0px auto;
        /* display: flex; */
        /* justify-content: center; */
        /* margin: 0px auto; */
        .about{
            display: none;
        }
        .info{
            width: 100%;
            margin: 0px auto;
            h1{
                display: none;
            }
            p{
                color: red;
                font-size: 20px;
            }
        }
    }
`