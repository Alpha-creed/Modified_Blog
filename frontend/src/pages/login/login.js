import React, { useContext, useState } from 'react'
import styled from "styled-components"
import login from "../../assest/login.jpg"
import {Link,useNavigate} from "react-router-dom"
import { Btn, Footer, Img, Input, InputRow, Label, Left, LoginDetails, LoginName, Message, Overall, Right, Wrapper } from './LoginStyles'
import { Container } from '../../GlobalStyles'
import { UserContext } from '../../context/UserContext'
import  axios  from 'axios'
import Navbar from "../../components/Navbar/Navbar";
import { URL } from '../../url'


const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const  [error,setError]=useState(null)
    const  [success,setSucess]=useState(null)
    const {setUser} = useContext(UserContext)
    const navigate=useNavigate()



    const handleLogin=async()=>{
        try {
            const res=await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
            // console.log(res.data)
            setUser(res.data)
            navigate("/")
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
    {/* <Navbar/> */}

    <Wrapper>

        <Left>
            <LoginName>
                Login               
            </LoginName>
            <LoginDetails >
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
                <Btn onClick={handleLogin} type='submit'>Login</Btn>
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