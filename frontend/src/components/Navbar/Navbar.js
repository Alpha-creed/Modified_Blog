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
import axios from 'axios'

const Navbar = () => {
  const [show,setShow]=useState(false);
    const {user} =useContext(UserContext)
    let navigate=useNavigate()
    let location=useLocation();
    const {setUser} =useContext(UserContext)
  
    const handleLogout=async()=>{
      try{
        const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
        // console.log(res)
        setUser(null)
        navigate("/login")
    
      }
      catch(err){
        console.log(err)
      }
    }
    const NavLinks={
        color:"white",
display: "flex",
alignItems: "center",
textDecoration: "none",
padding: "0.5rem 1rem",
height: "100%",

 ':hover': {
    color: "#c8c9d8",
    transition: "all 0.3s ease",
},

'@media screen and (max-width: 768px)': {
    textAlign: 'center',
    padding: '2rem',
    width: '100%',
    display:'table',

    ':hover': {
        color: '#4b59f7',
        transition: 'all 0.3s ease',
    }
}

    }
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
                        <Link style={NavLinks} to="/write">Write</Link>
                    </NavItems>}
                    <NavItems>
                        {/* to appear when not logged in or loged in */}
                    <Link style={NavLinks} to="/about">About</Link>
                    </NavItems>
                    {!user&&<NavItems>
                        {/* to appear when not logged in */}
                    <Link style={NavLinks} to="/login">login</Link>
                    </NavItems>}
                    {user&&<NavItems>
                    <NavLinks onClick={handleLogout}>Logout</NavLinks>
                    </NavItems>}
                    {user&&<NavItems>
                    <Link style={NavLinks} to={"/profile/"+user._id} >Profile</Link>
                    </NavItems>}
                    
                    {user&&<NavItems>
                    <NavLinks style={NavLinks} to={"/myblogs/"+user._id}>My blogs</NavLinks>
                    </NavItems>}
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
  )
}

export default Navbar