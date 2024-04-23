import React, { useContext, useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { Btn, BtnWrapper, H1, H3, ProfInput, ProfPost, ProfileSection, ProfileWrap, ProfileWrapper } from './ProfileStyles'
import ProfilePost from '../../components/ProfilePost/ProfilePost'
import  axios  from 'axios'
import Navbar from '../../components/Navbar/Navbar'
const Profile = () => {
  const param=useParams().id
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const {user,setUser}=useContext(UserContext)
  const navigate=useNavigate()
  const [posts,setPosts]=useState([])
  const [updated,setUpdated]=useState(false)

  const fetchProfile=async ()=>{
    try{
       const res=await axios.get(URL+"/api/users/"+user._id)
       setUsername(res.data.username)
       setEmail(res.data.email)
       setPassword(res.data.password)
    }
    catch(err){
       console.log(err)
    }
  }

  const handleUserUpdate=async()=>{
    setUpdated(false)
  try{
    const res=await axios.put(URL+"/api/users/"+user._id,{username,email,password},{withCredentials:true})
    // console.log(res.data)
    setUpdated(true)

  }
  catch(err){
    console.log(err)
    setUpdated(false)
  }


  }
  const handleUserDelete=async()=>{
    try{
      const res=await axios.delete(URL+"/api/users/"+user._id,{withCredentials:true})
      setUser(null)
      navigate("/")
      // console.log(res.data)
  
    }
    catch(err){
      console.log(err)
    }
  }

  const fetchUserPosts=async ()=>{
    try{
      const res=await axios.get(URL+"/api/posts/user/"+user._id)
      // console.log(res.data)
      setPosts(res.data)
  
  
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchProfile()
  
  },[param])
  
  useEffect(()=>{
    fetchUserPosts()
  
  },[param])
  return (
    <div>
        <Navbar/>
      <ProfileWrapper>
        <ProfPost>
          <H1>
            Your posts:
            {
              posts?.map((p)=>(
                <ProfilePost key={p._id} p={p}/>
              ))
            }
          </H1>
        </ProfPost>
        <ProfileSection>
          <ProfileWrap>
            <H1>Your Profile </H1>
              <ProfInput 
                onChange={(e)=>setUsername(e.target.value)} 
                value={username}
                placeholder='Your username'
                type='text'/>
              <ProfInput
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                placeholder='Your email'
                type='email'
                />
            <BtnWrapper>
              <Btn onClick={handleUserUpdate}>Update</Btn>
              <Btn onClick={handleUserDelete}>Delete</Btn>
            </BtnWrapper>
            {updated && <H3>User Update Successfully!</H3>}
          </ProfileWrap>
        </ProfileSection>
      </ProfileWrapper>
    </div>
  )
}

export default Profile