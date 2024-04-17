import React, { useContext, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { Btn, BtnWrapper, H1, H3, ProfInput, ProfPost, ProfileSection, ProfileWrap, ProfileWrapper } from './ProfileStyles'
import ProfilePost from '../../components/ProfilePost/ProfilePost'

const Profile = () => {
  const param=useParams().id
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const {user,setUser}=useContext(UserContext)
  const navigate=useNavigate()
  const [posts,setPosts]=useState([])
  const [updated,setUpdated]=useState(false)

  const handleUserUpdate=async()=>{

  }
  const handleUserDelete=async()=>{

  }
  return (
    <div>
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