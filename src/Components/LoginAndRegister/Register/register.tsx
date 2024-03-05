import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FormBtn, FormDiv, FormInput, FormTitle, InputDiv, InputText } from "../FormComponents";
const app = require('../configFirebase')
const auth = getAuth();

const Container = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f2;
`
export const Register: React.FC = (props) => {
    const [email, setEmail] = useState('')
    const[password,setPassword]=useState('');

    const handleRegister = () => {  

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const userToRegister = userCredential.user;
                window.alert('succesfully registered')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert(errorCode + errorMessage)
            })
    }
    return (
        <Container>
                <FormDiv>
                    <div style={{display:"inline-flex",width:"100%",justifyContent:"space-between",alignItems:"center"}}>
                    <FormTitle>Register</FormTitle>
                    <Link to="/" style={{textDecoration:"none"}}><h4 style={{textDecoration:"none",color:"#222"}}>Cancel</h4></Link>
                    </div>
                        <InputDiv>
                            <InputText>Email</InputText>
                            <FormInput type="email" name="email" required onChange={(event)=>setEmail(event.currentTarget.value)}></FormInput>
                        </InputDiv>
                        <InputDiv>
                            <InputText>Password</InputText>
                            <FormInput type="password" name="password" required onChange={(event)=>setPassword(event.currentTarget.value)}></FormInput>
                        </InputDiv>
                            <FormBtn onClick={handleRegister}>Register</FormBtn>
                            <h4 style={{textDecoration:"none", alignSelf:"center"}}> Already have an account ? <Link to={"/login"} style={{color:"#62e7aa", textDecoration:"underline"}}>Log in</Link></h4>
                </FormDiv>
        </Container>
    )
}