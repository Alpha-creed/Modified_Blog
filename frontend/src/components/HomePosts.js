import React, { useState } from 'react'
import styled from 'styled-components'
import test from '../assest/test.jpg'

const HomePosts = () => {
    const [showFullDesc,setShowFullDesc]=useState(false);
    // const showFullDescHandler = ()=>{
    //     setShowFullDesc(!showFullDesc)
    // }
    // const Desc = showFullDesc?postdesc:post.desc.slice(0,20)
  return (
    <Wrapper>
        <Title>
            <h5>Blogger Buzz</h5>
            <p>3 years ago</p>
        </Title>
        <h2>A better Blogger experience on the web</h2>
        <Content>
            <Img src={test} alt="blog Image"/>
            <p>TSo by colonel hearted ferrars. Draw from upon here gone add one. He in sportsman household otherwise it perceived instantly. Is inquiry no he several excited am. Called though excuse length ye needed it he having. Whatever throwing we on resolved entrance together graceful. Mrs assured add private married removed believe did she.

Left till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged.

With my them if up many. Lain week nay she them her she. Extremity so attending objection as engrossed gentleman something. Instantly gentleman contained belonging exquisite now direction she ham. West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest sex bachelor the may delicate its yourself. As he instantly on discovery concluded to. Open draw far pure miss felt say yet few sigh.

Turned it up should no valley cousin he. Speaking numerous ask did horrible packages set. Ashamed herself has distant can studied mrs. Led therefore its middleton perpetual fulfilled provision frankness. Small he drawn after among every three no. All having but you edward genius though remark one.</p>
{/* <span onClick={showFullDescHandler}>... {showFullDesc ? "." : "Reead More"}</span> */}
        </Content>
    </Wrapper>
  )
}
const Wrapper=styled.div`
width:100%;
display:flex;
gap:15px;
flex-direction:column;
border:1px black;
padding:10px;
`
const Img = styled.img`
width:150px;
Object-fit:cover;
`
const Title=styled.div`
display:flex;
justify-content:space-between;
`
const Content=styled.div`
    display:flex;
    justify-content:space-evenly;
    gap:15px;
`
export default HomePosts