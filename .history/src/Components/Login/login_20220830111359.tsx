import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Btn, BtnContainer } from "../btn";

const Container = styled.div`
    width: 100%;
    height: 100%;
`
const LoginForm = styled.form`
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
    return (
        <Container>
            <LoginForm>
                <LoginTitle>Log In</LoginTitle>
                <LoginInput placeholder="Email" required type='text' onClick={handlelogin}></LoginInput>
                <LoginInput placeholder="Password" required type='password'></LoginInput>
                <BtnContainer>
                    <Link to='/'><Btn>Cancel</Btn></Link>
                    <Btn id="Join">Login</Btn>
                </BtnContainer>
            </LoginForm>
        </Container>
    )
}