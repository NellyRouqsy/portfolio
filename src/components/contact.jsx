import styled from "styled-components";

const Contact = () =>{
    return(
        <Cont id="contact">
            <Connect>
                <h1>LET'S CONNECT</h1>
                <p>Say hello at <a href="farouqadedokun@gmail.com">farouqaadedokun@gmail.com</a></p>
                <div>

                </div>
            </Connect>
            <Details>
                <form action="">
                    <p>Name</p>
                    <input type="text" name="" id="input_text" />
                    <p>Email</p>
                    <input type="email" name="" id="input_text" />
                    <p>Subject</p>
                    <input type="text" name="" id="input_text" />
                    <p>Message</p>
                    <textarea type="text" name="" id="input_message"></textarea>

                    <input type="submit" value="Submit"id="submit"/>
                </form>
            </Details>
        </Cont>
    );
};

export default Contact

const Cont = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0px auto;
`
const Connect = styled.div`

`
const Details = styled.div`

    #input_text{
        height: 30px;
        width: 300px;
    }
    #input_message{
        height: 150px;
        width: 300px;
    }
    #submit{
        display: block;
    }
`