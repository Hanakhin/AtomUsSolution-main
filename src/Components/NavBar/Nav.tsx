import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "./logo2.png";
import cross from "./icons/cross.png";
import burger from "./icons/burgerDark.png";
import facebook from "./socials/facebook.png";
import instagram from "./socials/instagram.png";
import discord from "./socials/discord.png";
import twitter from "./socials/twitter.png";
import mail from "./socials/mail.png";
import { Link } from "react-router-dom";

const NavContainer = styled.div<{ opened: boolean }>`
    display:inline-flex;
    width: 90%;
    height:150px;
    padding:22px;
    transition: all 0.4s ease-in-out;
    position: fixed;
    z-index: 1;
    border-bottom: 2px solid #222;

    @media(max-width:1024px){
        flex-direction: column;
        height: 100vh;
        background-color: rgba(0,0,0,0.85);
        transform:${p => p.opened ? 'translateY(0)' : 'translateY(-100%)'} ;
        backdrop-filter: blur(2px);
    } 
`
const NavButton = styled.div`
    padding:12px 24px;
    color: #111;
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: 500;

        &:hover{
            border-bottom: 2px solid #111;
        }

        @media(max-width:1024px){
            border-bottom: none ;
            color: #FFF;

    }
`
const Logo = styled.img`
    width:200px;
    height:130px;

    @media(max-width:1024px){
        display: none;
}
`
const NavSpace = styled.div`
    width:100%;
    height:100%;   
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width:1024px){
        flex-direction: column;
    } 
`
const Title = styled.h1`
    margin:0;
    font-size:24px;
    color: white;
`
const Button = styled.div`
    padding:12px 24px ;
    color:#222;
    cursor: pointer;
    transition: all 0.2s;
    margin: 8px;
    background-color: #fff;
    border: solid 2px #222;

    &:hover{
        color:#fff;
        background-color: #222;
        border: solid 2px transparent;
    }

    @media(max-width:1024px){
        background-color: transparent;
        border: none;
        color: #fff;
        border: 2px solid transparent;
    }
     
`
const NavIcon = styled.img<{ opened: boolean }>`
    width: 24px;
    height:24px;
    position: absolute;
    top: ${p => p.opened ? '10%' : '110%'};
    left: 85%;
    display: none;
    @media(max-width:1024px){
        display: block;
    }
`
const SocialsDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: space-evenly;

    @media(min-width:1024px){
        display: none;
    }
`
const Shake = keyframes`
    0%{transform:rotateZ(0deg)}
    33%{transform:rotateZ(10deg)}
    66%{transform:rotateZ(-10deg)}
    100%{transform:rotateZ(0deg)}
`
const Socials = styled.img`
    width: 24px;
    height:24px;
    cursor: pointer;

    &:hover{
        animation: ${Shake} 0.5s ;
    }
`

export const Nav: React.FC = (props) => {
    const [open, setOpen] = useState(false);
    return (

        <NavContainer opened={open}>
            <NavIcon opened={open} src={open ? cross : burger} onClick={() => setOpen(!open)} />
            <NavSpace>
                <Link to="/Contact"><NavButton>CONTACT</NavButton></Link>
                <Link to="/ELearning"><NavButton>E-LEARNING</NavButton></Link> 
                <Link to="/Shop"><NavButton>SHOP</NavButton></Link>
            </NavSpace>
            <NavSpace>
                        <Logo src={logo} />
            </NavSpace>
            <NavSpace>
               
                <Link to="/Register"><Button>REGISTER</Button></Link>
                <Link to="/Login"><Button>LOGIN</Button></Link>
            </NavSpace>
            <SocialsDiv>
                <a href="https://www.instagram.com/?hl=fr" target="blank" ><Socials src={instagram} /></a>
                <a href="https://www.facebook.com" target="blank" ><Socials src={facebook} /></a>
                <a href="https://discord.gg/JPvfdNmJ8f" target="blank" ><Socials src={discord} /></a>
                <a href="https://www.google.com/intl/fr/gmail/about/" target="blank" ><Socials src={mail} /></a>
                <a href="https://twitter.com/AtomusSolution" target="blank" ><Socials src={twitter} /></a>
            </SocialsDiv>

        </NavContainer>

    )
}