import React, { useState } from 'react'
import styled from "styled-components"
import signup from "../assest/signUp.png"
import {Link,useNavigate} from "react-router-dom"

export const Register = () => {
    const [email,setEmail] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const  [error,setError]=useState(false)
    // const {setUser} = useContext()
    const navigate=useNavigate()

    const handleSignup=async()=>{
        try {
            
        } catch (error) {
            setError(true)
            console.log(error);

        }
    }
  return (
    <Overall>
    {error&&<Err>Something went wrong</Err>}
<Wrapper>
  <Left>
      <LoginName>
          SignUp               
      </LoginName>
      <LoginDetails>
          <label>Username</label><br/>
          <Input type="text" placeholder="baidi" onChange={(e)=>setUsername(e.target.value)}/>
      </LoginDetails>
      <LoginDetails>
          <label>Email</label><br/>
          <Input type="text" placeholder="baidi@xyz.com" onChange={(e)=>setEmail(e.target.value)}/>
      </LoginDetails>
      <LoginDetails>
          <label>Password</label><br/>
          <Input type="Password" placeholder="8+ characters" onChange={(e)=>setPassword(e.target.value)}/>
      </LoginDetails>
      
      <LoginDetails>
      <Btn  type="submit" onClick={handleSignup}>SignUp</Btn>
      </LoginDetails>
  </Left>
  <Right>
      <Img ></Img>
  </Right>
</Wrapper>
<Footer>
Already have an account?<Link style={{textDecoration:'none',color:'white'}} to="/login"><b>SignIn</b></Link>
</Footer>
</Overall>
)
}

const Overall = styled.div`
color:black;
height:100vh;
`
const Err = styled.header`
background:red;
color:white;
width:auto;
height100%;
padding:20px 150px;
font-size:20px;

`
const Wrapper = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:1fr;
`
const Left = styled.span`
grid-column:1;
grid-row:1;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`
const LoginName = styled.h1`
  font-size:30px;

`
const LoginDetails=styled.div`
margin:15px 0;


`
const Input = styled.input`
height:20px;
width:400px;
border-radius:25px;
margin-top:5px;
padding:15px;

`
const Btn = styled.button`
height:40px;
width:400px;
border-radius:25px;
margin-top:5px;
color:white;
background:orange;
`
const Right = styled.span`
grid-column:2;
grid-row:1;
margin-left:10px;


`
const Img = styled.div`
background-image:url(${signup});
width:auto;
height:90vh;
background-size:cover;
background-repeat:no-repeat;
background-position: center;
`
const Footer = styled.footer`
background:black;
width:auto;
height100%;
padding:20px 150px;
color:white;
font-size:20px;
display:flex;
align-items:center;


`

