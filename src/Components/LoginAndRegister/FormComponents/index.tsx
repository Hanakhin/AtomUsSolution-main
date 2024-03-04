import React from "react";
import styled from "styled-components";

export const FormTitle = styled.h1`
    color: #222;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    letter-spacing: 4px;
`

export const InputText = styled.div`
    color: #222;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    letter-spacing: 2px;  
    font-size: 22px;
`
export const FormInput = styled.input`
    width: 100%;
    border: 2px solid #6666664b;
    border-radius: 4px;
    padding: 8px;
`
export const FormBtn = styled.div`
    font-size:150%;
    color:#fff;
    width: 100%;
    height: auto;
    padding: 2%;
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 2px solid transparent;

    &:hover{
        border: 2px solid #222;
        color: #222;
        background-color: #fff;
    }
`
export const FormDiv = styled.div`
    width: 20%;
    height:40%;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 22px;
    align-items: start;
    row-gap: 12px;
    min-height: 400px;
    min-width: 400px;
    @media (max-width:1300px){
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
    border-radius: 12px;
`
export const InputDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`