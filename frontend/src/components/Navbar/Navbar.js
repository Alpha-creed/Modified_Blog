import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../../context/UserContext'
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import Menu from '../Menu/Menu'
import { IconContext } from 'react-icons'
import { MobileIcon, Nav, NavIcon, NavItems, NavLinks, NavLogo, NavMenu, NavbarContainer } from './NavbarStyles'
import logo from '../../assest/logo2.PNG'
import { CgMenuRight } from 'react-icons/cg';
import {NavData} from '../../Data/NavbarData'

const Navbar = () => {
  const [show,setShow]=useState(false);
    const user =useState(true)
    let navigate=useNavigate()
    let location=useLocation();

    const handleClick=()=>{
        setShow(!show)
    }

    const scrollTo=(id)=>{
        const element=document.getElementById(id);
        element.scrollIntoView({behavior:'smooth'})
 }

    const closeMobileMenu=(to,id)=>{
        if (id && location.pathname === '/') {
			scrollTo(id);
		}

		navigate(to);
		setShow(false);
    }
  return (
    <IconContext.Provider value={{color:'blue'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon src={logo} alt="logo"/>
                    Baidi
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {show ? <FaBars/>:<CgMenuRight/>}
                </MobileIcon>
                <NavMenu show={show}>
                    {/* {NavData.map((el,index)=>(
                       <NavItems key={index}>
                            <NavLinks onClick={()=>closeMobileMenu(el.to,el.id)}>
                                {el.text}
                            </NavLinks>
                        </NavItems>
                    ))}  */}
                   {user&& <NavItems>
                        <NavLinks to="/write">Write</NavLinks>
                    </NavItems>}
                    <NavItems>
                        {/* to appear when not logged in or loged in */}
                    <NavLinks>About</NavLinks>
                    </NavItems>
                    {!user&&<NavItems>
                        {/* to appear when not logged in */}
                    <NavLinks>login</NavLinks>
                    </NavItems>}
                    {user&&<NavItems>
                    <NavLinks>Logout</NavLinks>
                    </NavItems>}
                    {user&&<NavItems>
                    <NavLinks>Profile</NavLinks>
                    </NavItems>}
                    
                    {user&&<NavItems>
                    <NavLinks>My blogs</NavLinks>
                    </NavItems>}
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
  )
}

export default Navbar