import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RegisterData from "../../models/register_data";
import UserData from "../../models/user_data";
import { Btn, BtnContainer } from "../btn";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Container = styled.div`
    width: 100%;
    height: 100%;
`
const RegisterForm = styled.div`
    width: 100%;
    height:100%;
    background-color: #222;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 64px;
    justify-content: center;

    @media(max-width:1024px){
        width: 100%;
    }
`
const RegisterTitle = styled.h1`
    font-size: 5vmin;
    color: #fff;
    letter-spacing: 8px;
`
const RegisterInput = styled.input`
    width: 25%;
    min-width:480px;
    border:0;
    height: 42px;
    padding: 12px;

    :focus{
        outline: none;
        border: none;
    }

    @media(max-width:1024px){
        width: 90%;
        min-width: 0;
        max-width: 230px;
    }
`
export const Register: React.FC = (props) => {
    const [form, setForm] = useState<RegisterData>({
        email: '',
        password: ''
    })
    const [user, setUser] = useState<UserData>({
        password: '',
        email: ''
    })
    const app = require('../configFirebase')
    const auth = getAuth();

    const handleRegister = () => {
        let email = user.email
        let password = user.password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const userToRegister = userCredential.user;
                window.alert('succesfully registered')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert(errorMessage + errorCode)
            })
    }
    return (
        <Container>
            <RegisterForm>
                <RegisterTitle>JOIN US !</RegisterTitle>
                <RegisterInput placeholder="Email@email.com" required type='email' name='email' onChange={(event) => { setForm({ ...form, email: event.currentTarget.value }) }}></RegisterInput>
                <RegisterInput placeholder="Password" required type='password' name='password' onChange={(event) => { setForm({ ...form, password: event.currentTarget.value }) }}></RegisterInput>
                <BtnContainer>
                    <Link to='/'><Btn>Cancel</Btn></Link>
                    <Btn id="Join" onMouseEnter={() => { { setUser({ password: form.password, email: form.email }) } }} onClick={test}>Confirm</Btn>
                </BtnContainer>
            </RegisterForm>
        </Container>
    )
}