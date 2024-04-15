import styled from 'styled-components'

export const ProfileWrapper=styled.div`
    min-height:80vh;
    padding:0px 8px;
    margin-top:2rem;
    display:flex;
    flex-direction: column-reverse; /* flex-col-reverse */
    align-items: flex-start; /* items-start */
    @media screen and(max-width:768px){
        padding:0px 200px;
        align-items: flex-start; /* items-start */
        flex-direction:row;
    }
`

export const ProfPost = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    margin-top:2rem;
    @media screen and(max-width:768px){
        width:70%;
        margin-top:0rem;
    }
`

export const H1=styled.h1`
    font-size:3rem;
    font-weight:bold;
    margin-bottom:1rem;
`
export const ProfileSection=styled.div`

`