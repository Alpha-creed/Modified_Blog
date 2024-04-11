import React, { useState } from 'react'
import test from '../../assest/test.jpg'
import { Container, Section } from '../../GlobalStyles';
import { Content, ContentColumn, Header, Img, ImgWrapper, SubHeading, TextWrapper, Timeline, Title, Wrapper } from './HomePostStyles';

 const HomePosts = () => {
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
            <Header>Blogger Buzz</Header>
        </Title>
        <SubHeading>A better Blogger experience on the web-<Timeline>3 years ago</Timeline>
</SubHeading>
        <Content>
          <ContentColumn>
            <Img src={test} alt="blog Image"/>
            
            <TextWrapper>TSo by colonel hearted ferrars. Draw from upon here gone add one. He in sportsman household otherwise it perceived instantly. Is inquiry no he several excited am. Called though excuse length ye needed it he having. Whatever throwing we on resolved entrance together graceful. Mrs assured add private married removed believe did she.

Left till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged.

With my them if up many. Lain week nay she them her she. Extremity so attending objection as engrossed gentleman something. Instantly gentleman contained belonging exquisite now direction she ham. West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest sex bachelor the may delicate its yourself. As he instantly on discovery concluded to. Open draw far pure miss felt say yet few sigh.

Turned it up should no valley cousin he. Speaking numerous ask did horrible packages set. Ashamed herself has distant can studied mrs. Led therefore its middleton perpetual fulfilled provision frankness. Small he drawn after among every three no. All having but you edward genius though remark one.</TextWrapper>
</ContentColumn>
{/* <span onClick={showFullDescHandler}>... {showFullDesc ? "." : "Reead More"}</span> */}
        </Content>
    </Wrapper>
    </Container>
    </Section>
  )
}
export default HomePosts
