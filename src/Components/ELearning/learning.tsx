import React from "react";
import styled from "styled-components";
import { Btn } from "../btn";
import { Link } from "react-router-dom";

const Container = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Learning: React.FC = () => {

    return (
        <Container>
            <h1>There's nothing here... Yet</h1>
            <Link to='/'><Btn id="Dark">Back</Btn></Link>
        </Container>
    )
}