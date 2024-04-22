import React, { useState } from 'react'
import test from '../../assest/test.jpg'
import { Container, Section } from '../../GlobalStyles';
import { Content, ContentColumn, Header, Img, ImgWrapper, SubHeading, TextWrapper, Timeline, Title, Wrapper } from './HomePostStyles';
import { IF } from '../../url';

 const HomePosts = ({post}) => {
    const [showFullDesc,setShowFullDesc]=useState(false);
    // const showFullDescHandler = ()=>{
    //     setShowFullDesc(!showFullDesc)
    // }
    // const Desc = showFullDesc?postdesc:post.desc.slice(0,20)
  return (
    <Section inverse={true}>
<Container>
          <Wrapper >
        <Title>
            <Header>LW_SVN</Header>
        </Title>
        <SubHeading>{post.title}-<Timeline>
        <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
        </Timeline>
</SubHeading>
        <Content>
          <ContentColumn>
            <Img src={IF+post.photo} alt="blog Image"/>
            
            <TextWrapper>{post.desc.slice(0,200)+" ...Read more"}-<span>@{post.username}</span></TextWrapper>
</ContentColumn>
{/* <span onClick={showFullDescHandler}>... {showFullDesc ? "." : "Reead More"}</span> */}
        </Content>
    </Wrapper>
    </Container>
    </Section>
  )
}
export default HomePosts
