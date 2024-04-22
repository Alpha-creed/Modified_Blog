import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../../context/UserContext'
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import Menu from '../Menu/Menu'
import { IconContext } from 'react-icons'
import { BarsWrapper, H1, MenuWrapper, MobWrapper, MobileIcon, Nav, NavIcon, NavItems, NavLinks, NavLogo, NavMenu, NavWrapper, NavbarContainer, PathInput, PathP, PathWrapper } from './NavbarStyles'
import logo from '../../assest/logo2.PNG'
import { CgMenuRight } from 'react-icons/cg';
import {NavData} from '../../Data/NavbarData'

const Navbar = () => {
    const [prompt,setPrompt]=useState("")
    const [menu,setMenu]=useState(false)
  const navigate=useNavigate()
  const path=useLocation().pathname
  
  // console.log(prompt)
  

  const showMenu=()=>{
    setMenu(!menu)
  }
  
   
    const {user}=useContext(UserContext)
    

  return (
    <NavWrapper>
        <H1><Link to="/">Baidi</Link></H1>
        {path==="/" && <PathWrapper>
                <PathP onClick={()=>navigate(prompt?"search="+prompt:navigate("/"))}><BsSearch/></PathP>
                <PathInput onChange={(e)=>setPrompt(e.target.value)} placeholder='Search a post' type='text'/>

            </PathWrapper>}
        <MobWrapper>
            {user?<h3><Link to="/write">Write</Link></h3>:<h3><Link to="/login">Login</Link></h3>}   
            {user?<div onClick={showMenu}>
                <BarsWrapper>
                    <FaBars/>
                </BarsWrapper>
                {menu &&<Menu/>}
            </div>:<h3><Link to="/register">Register</Link></h3>} 
        </MobWrapper>    
        <MenuWrapper onClick={showMenu}>
            <BarsWrapper>
                <FaBars/>
            </BarsWrapper>
            {menu && <Menu/>}
        </MenuWrapper>
    </NavWrapper>
  )
}

export default Navbar