import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import {Link, useNavigate} from 'react-router-dom'
import { H3, MenuWrapper } from './MenuStyles'
import { URL } from '../../url'
import axios from 'axios'

const Menu = () => {
  const {user} = useContext(UserContext)
  const {setUser} =useContext(UserContext)
  const navigate=useNavigate()

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
  return (
    <MenuWrapper>
      {!user && <H3><Link to='/login'>Login</Link></H3>}
      {!user && <H3><Link to='/register'>Register</Link></H3>}
      {user && <H3><Link to={"/profile/"+user._id}>Profile</Link></H3>}
      {user && <H3><Link to='/write'>Write</Link></H3>}
      {user && <H3><Link to={"/myblogs/"+user._id}>My Blogs</Link></H3>}
      {user && <H3 onClick={handleLogout}>Logout</H3>}
    </MenuWrapper>
  )
}

export default Menu