import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Nav } from "../NavBar/Nav";
import logo from './logo2.png';

const MainContainer = styled.div`
    width:100%;
    height:100%;
    min-height: 100vh;
    background:#fff;
`
const BigTitle=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 28px;
`
const Test=keyframes`
    0%{transform:translatex(0px)}
    50%{transform:translatex(-550px)}
    100%{transform:translatex(0px)}
`
const Title=styled.h1`
    font-size: 4vw;
    font-weight: 400;
    letter-spacing: 6px;
    cursor: default;


    &::after{
        content:'';
        position: relative;
        display: block;
        border:2px solid black;
        width: 35%;
        left: 64%;
        animation: ${Test} 15s infinite ease-in-out;
    }

    @media(max-width:1024px){
        font-size:6vw;
        text-align: center;
        &::after{
            left: 24%;
            width:50%;
            animation: 0;
        }
        &::before{
            display:none;
        }
        
    }
`
const AboutUsBtn=styled.button`
    width: fit-content;
    min-width: 200px;
    height: 50px;
    background-color: #fff;
    color:#222;
    font-size: 22px;
    font-weight: 200;
    letter-spacing: 4px;
    cursor: pointer;
    border: 0;
    transition: all 0.2s;
    border: 2px solid #222;
    font-weight: 600;

    &:hover{
        background-color: #222;
        color: #fff;
    }

`
const Logo=styled.img`

    @media(min-width:1025px){
        display:none
    }
`
export const Page: React.FC = (props) => (
    <>
        <MainContainer>
            <Nav />
            <BigTitle>
                <Logo src={logo} alt="Logo Atomus noir avec un joli cerf noir plein de muscles"/>
                <Title>LET'S BE CHEMICALLY RESPONSIBLE</Title>
                <Link to='/about'><AboutUsBtn>LEARN MORE</AboutUsBtn></Link>
            </BigTitle>
        </MainContainer>
    </>
)