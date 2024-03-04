import React from "react";
import styled from "styled-components";

export const Btn=styled.button`
    background-color: transparent;
    border: solid 1px #fff;
    width: fit-content;
    min-width: 230px;
    height: 48px;
    box-shadow: none;
    color: #fefef9;
    font-size: 2.3vh;
    letter-spacing: 2px;
    font-weight: 600;
    cursor: pointer;
`
export const BtnContainer=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
column-gap: 22px;
margin-bottom: 10%;

@media(max-width:1024px){
    flex-direction:column-reverse;
    row-gap: 22px;
    align-items: center;
}
`