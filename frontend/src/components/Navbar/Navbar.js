import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import Menu from './Menu'

const Navbar = () => {
  const [prompt,setPrompt]=useState("")
  const [menu,setMenu] = useState(false)
  const navigate = useNavigate()
  const path=useLocation().pathname

  const showMenu=()=>{
    setMenu(!menu)
  }
  const {user}=useContext(UserContext)

  return (
    <Wrapper>
      <Head>
      <H1><Link to='/' style={linkStyle}>Baidi</Link></H1>
      </Head>
      <Center>
      {path==='/' &&<PaDiv>
        <Input type='text' placeholder='Search the site'/>
        <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} style={{cursor:'pointer',position:"absolute",right:"10px"}}>
          <BsSearch/>
        </p>
      </PaDiv> }
      </Center>
  <End>
      <Login>
        {user? <h3><Link to="/write" style={linkStyle}>Write</Link></h3>:<h3><Link to="/login" style={linkStyle}>Login</Link></h3>}
        </Login>
        <Mid>
        {user?<div onClick={showMenu}>
          <Bars><FaBars/></Bars>
          {menu&&<Menu/>}
            
        </div>:<h3><Link to="/register" style={linkStyle}>Regsiter</Link></h3>}
        </Mid>
    <Footer onClick={showMenu}>
      <Bars><FaBars/></Bars>
      {menu && <Menu/>}
    </Footer>
    </End>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:10px 5px;
`
const linkStyle={
  textDecoration:"none",
  color:"black"
}

const Input = styled.input`
  padding:15px;
  border-radius:15px;
  width:500px;
  
`
const Login=styled.div`
margin-right:10px;

`
const Footer =styled.div`
font-size:15px;
margin-left:10px;

`
const H1 = styled.h1`
  font-size:20px;
  font-style:bold;
`
const PaDiv=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position :relative;
`
const Center=styled.div`
`
const End=styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;
gap:20px;
`
const Head=styled.div``
const Bars=styled.p`
  position:relative;
  cursor:pointer;
`
const Mid =styled.div` 
  display:flex;
  align-items:center;
  visibilty:hidden;
  justify-content:center;
` 

export default Navbar