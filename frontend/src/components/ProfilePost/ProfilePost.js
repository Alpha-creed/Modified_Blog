import React from 'react'
import { H1, Left, More, Right, UserName, Wrapper } from './ProfilePostStyled'
import { IF } from '../../url'

const ProfilePost = ({p}) => {
  return (
    <Wrapper>
      <Left>
        <Img src={IF.p.photo} alt=""/>
      </Left>
      <Right>
        <H1>
          {p.title}
        </H1>
        <UserName>
          <p>@{p.username}</p>
          <p>{new Date(p.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(p.updatedAt).toString().slice(16,24)}</p>
        </UserName>
        <More>{p.desc.slice(0,200)+" ...Read more"}</More>
      </Right>
    </Wrapper>
  )
}

export default ProfilePost