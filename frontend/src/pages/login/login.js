import React, { useContext, useState } from 'react'
import styled from "styled-components"
import login from "../../assest/login.jpg"
import {Link,useNavigate} from "react-router-dom"
import { Btn, Footer, Img, Input, InputRow, Label, Left, LoginDetails, LoginName, Message, Overall, Right, Wrapper } from './LoginStyles'
import { Container } from '../../GlobalStyles'


const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const  [error,setError]=useState(null)
    const  [success,setSucess]=useState(null)

    // const {setUser} = useContext()
    const navigate=useNavigate()



    const handleLogin=async()=>{
        try {
            
        } catch (error) {
            setError(true)
            console.log(error);

        }
    }

    const messageVariants={
        hidden:{y:30,opacity:0},
        animate:{y:0,opacitty:1,transition:{delay:0.2,duration:0.4}},
    }
    const loginData=[
        {
            label:'Email',
            value:email,
            onChange:(e)=>setEmail(e.target.value),
            type:'text',
            placeholder:"baidi@xyz.com"},
         {
            label:'Password',
            value:password,
            onChange:(e)=>setPassword(e.target.value),
            type:'password',
            placeholder:'8+ characters'
         }
    ]
  return (
    <Overall>
    <Container>
    <Wrapper>

        <Left>
            <LoginName>
                Login               
            </LoginName>
            <LoginDetails onSubmit={handleLogin}>
                {
                    loginData.map((el,index)=>(
                        <InputRow key={index}>
                            <Label>
                                {el.label}
                            </Label>
                            <Input
                                type={el.type}
                                placeholder={el.placeholder}
                                value={el.value}
                                onChange={el.onChange}
                            />
                        </InputRow>
                    ))
                }
                <Btn type='submit'>Login</Btn>
            </LoginDetails>
            <Footer>
    Do not have an account?<Link style={{textDecoration:'none',color:'black'}} to="/register"><b>Signup</b></Link>
    </Footer>
        </Left>
    {
       error&&(
        <Message
            variants={messageVariants}
            initial="hidden"
            animate="animate"
            error>
                {error}
            </Message>
       ) 
    }
    {
        success &&(
            <Message
                variants={messageVariants}
                initial="hidden"
                animate="animate">
                    {success}
                </Message>
        )
    }
    </Wrapper>
    </Container>
    </Overall>
  )
}

export default Login