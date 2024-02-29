import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { Btn, BtnContainer } from "../btn";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Container = styled.div`
    width: 100%;
    height: 100%;
`
const LoginForm = styled.div`
    width: 50%;
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
const LoginTitle = styled.h1`
    font-size: 5vmin;
    color: #fff;
    letter-spacing: 8px;
`
const LoginInput = styled.input`
    width: 50%;
    border:0;
    height: 42px;
    padding: 12px;

    :focus{
        outline: none;
        border: none;
    }

    @media(max-width:1024px){
        width: 90%;
    }
`
export const Login: React.FC = (props) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            window.alert('successfully registered')
            Navigate(/')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert(errorCode + errorMessage)
          });
    }

    return (
        <Container>
            <LoginForm>
                <LoginTitle>Log In</LoginTitle>
                <LoginInput placeholder="Email" required type='email' onChange={(event)=>setEmail(event.currentTarget.value)}></LoginInput>
                <LoginInput placeholder="Password" required type='password' onChange={(event)=>setPassword(event.currentTarget.value)}></LoginInput>
                <BtnContainer>
                    <Link to='/'><Btn>Cancel</Btn></Link>
                    <Btn id="Join" onClick={handleLogin}>Login</Btn>
                </BtnContainer>
            </LoginForm>
        </Container>
    )
}