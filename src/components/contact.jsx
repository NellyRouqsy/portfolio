import { useState } from "react";
import styled from "styled-components";
// import { SMTPClient } from "emailjs";

const Contact = () =>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [subject,setSubject] = useState("")
    const [message,setMessage] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        // setSubmit([...submit, { name, email, subject, message }])

        let details = ({name,email,subject,message})
        console.log(details);
        

        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }
    // const client = ()=>{

    // };
    
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
                    <p>Name:</p>
                    <input type="text" id="input_text" name="name" value={name} onChange={ (e) => {setName(e.target.value)}} required/>
                    <p>Email:</p>
                    <input type="email"  id="input_text" value={email} onChange={ (e) => {setEmail(e.target.value)}} required/>
                    <p>Subject:</p>
                    <input type="text" name="subject" id="input_text" value={subject} onChange={ (e) => {setSubject(e.target.value)}} required/>
                    <p>Message:</p>
                    <textarea type="text" name="message" id="input_message" value={message} onChange={(e) => { setMessage(e.target.value) }} required></textarea>

                    <button onClick={handleSubmit}>Submit</button>
                    {/* <button>abc</button> */}
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
    /* line-height: 20px; */
    /* p{
        color: red;
    } */
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