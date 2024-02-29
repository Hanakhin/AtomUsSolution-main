import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Form
import emailjs from '@emailjs/browser';
import { Btn, BtnContainer } from "../btn";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display:inline-flex;

    @media(max-width:1024px){
        flex-direction: column;
        height: fit-content;
    }
`
const FormSide = styled.form`
    width: 50%;
    height: 100%;
    background-color: #222;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 56px;

    @media(max-width:1024px){
        width: 100%;
    }
`
const NameField = styled.input`
    width: 50%;
    border:0;
    height: 42px;
    padding: 12px;
    max-width: 480px;

    :focus{
        outline: none;
        border: none;
    }

    @media(max-width:1024px){
        width: 90%;
    }
`
const TextAreaCustom = styled.textarea`
    max-width: 480px;
    width: inherit;
    height: 200px;
    border: 0;
    padding: 12px;
    resize: none;

    :focus{
        outline: none;
        border: none;
    }

    @media(max-width:1024px){
        width: 90%;
    }
`
const Contact = styled.h1`
    font-size: 5vh;
    color: #FFF;
    letter-spacing: 8px;
    font-weight: 400;
    margin: 0;

    @media(max-width:1024px){
        font-size:3vmax;
        margin-top: 52px;
    }
`
const SubmitBtn = styled.button`
    background-color:#fff;
    width: fit-content;
    min-width: 230px;
    height: 48px;
    border:none;
    box-shadow: none;
    color: #222;
    font-size: 2.3vh;
    letter-spacing: 2px;
    font-weight: 600;
    cursor: pointer;

    &:hover{
        filter: brightness(1.2);
    }
`
const TextSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding:2%;
    align-items: center;

    @media(max-width:1024px){
        display: none;
    }
`
const TitleTextSide = styled.h1`
    margin:0;
    color: #222;
    font-size: 5vmin;
`
const Text = styled.p`
color: #222;
font-size: 3vmin;
`
const FatText = styled.div`
    font-weight:600px;
    color: #222;
    align-self: start;
    font-size: 3vmin;
    font-weight: 600;
`
export const ContactPage: React.FC = (props) => {
    const [form, setForm] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: '',
    })
        const sendEmail = (e: {
            target: any; preventDefault: () => void; 
}) =>{
            e.preventDefault();
        
    emailjs.send('AtomUs',
    'TemplateAtomUs',
    {
    firstName:`${form.firstName}`,
    lastName:`${form.lastName}`,
    message:`${form.message}`,
    company:`${form.company}`,
    email:`${form.email}`
    },
    'OA32nFf0pvb-6DSIt')
    .then((result)=>{
        window.alert('message envoyé');
    },(error)=>{window.alert('erreur')});
    e.target.reset()
}
    return (
        <Container>
            <FormSide onSubmit={sendEmail}>
                <Contact>CONTACT US !</Contact>
                <NameField type='text' id="FirstName" name="FirstName" placeholder='First Name' onChange={(event) => { setForm({ ...form, firstName: event.currentTarget.value }) }} required></NameField>
                <NameField type='text' placeholder='Last Name' onChange={(event) => { setForm({ ...form, lastName: event.currentTarget.value }) }} required></NameField>
                <NameField type='email' placeholder='Your@email.com' name="email" onChange={(event) => { setForm({ ...form, email: event.currentTarget.value }) }} required></NameField>
                <NameField type='text' placeholder='Company' onChange={(event) => { setForm({ ...form, company: event.currentTarget.value }) }} required></NameField>
                <TextAreaCustom placeholder='Tell us a bit more!' name='message'onChange={(event) => { setForm({ ...form, message: event.currentTarget.value }) }} required></TextAreaCustom>
                <BtnContainer>
                    <Link to='/'><Btn>Cancel</Btn></Link>
                    <SubmitBtn type='submit'>Get Started</SubmitBtn>
                </BtnContainer>
                
            </FormSide>
            <TextSide>
                <TitleTextSide>LET'S TALK ABOUT IT!</TitleTextSide>
                <Text>Whether you are a student, a company, a developer, a teacher, a doctor, a prospector etc... Feel free to send us a contact request if you want to talk about the Atomus project.</Text>
                <Text>We recommend that you take care to stipulate your request and avoid spamming mail so that we can receive your forms correctly. </Text>
                <Text>We will take great care to process your request quickly, you will receive a response from support as soon as possible, we apologize if your request is delayed due to the number of requests. </Text>
                <FatText>Enjoy your visit to Atomus website!</FatText>
            </TextSide>
        </Container>
    )
}
