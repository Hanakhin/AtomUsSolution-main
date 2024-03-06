import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FormBtn, FormDiv, FormInput, FormTitle, InputText, InputDiv} from "../FormComponents";


const Container = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f2;
`
export const Login: React.FC = (props) => {

    const [email,setEmail]=useState('')

    const [password,setPassword]=useState('')

    const navigate = useNavigate()

    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            window.alert('successfully Logged in')
            navigate('/')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert(errorCode + errorMessage)
          });
    }
    return (
        <Container>
                <FormDiv>
                    <div style={{display:"inline-flex",width:"100%",justifyContent:"space-between",alignItems:"center"}}>
                    <FormTitle>Sign In</FormTitle>
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
                            <FormBtn onClick={handleLogin}>Sign In</FormBtn>
                            <h4 style={{textDecoration:"none", alignSelf:"center"}}> Don't have an account ? <Link to={"/register"} style={{color:"#62e7aa", textDecoration:"underline"}}>Register</Link></h4>
                </FormDiv>
        </Container>
    )
}