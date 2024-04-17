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
    display:flex;
    justify-content:start;
    align-items:start;
    width:100%;
    @media screen and(max-width:768px){
        position:sticky;
        top:12;
        justify-content:end;
        width:30%;
        align-items:end;
}
`

export const ProfileWrap = styled.div`
    display:flex;
    flex-direction:column;
    gap:2rem;
    align-items:start;
`

export const ProfInput=styled.input`
    outline:none;
    padding:2px 4px;
    color: #808080;
`
export const BtnWrapper=styled.button`
    display:flex;
    align-items:center;
    gap:2rem;
    marign-top:2rem;
`
export const Btn=styled.button`
    color:white;
    font-weight:semibold;
    background-color:black;
    padding:2px 4px;
    cursor:pointer;
    transition:color 0.2s ease-in-out,background-color 0.2s ease-in-out
    &:hover{
        color:black;
        background-color:#cccccc
    }
`
export const H3=styled.h3`
color: #4CAF50; /* Assuming green-500 translates to #4CAF50 */
font-size: 0.875rem; /* Assuming "text-sm" translates to 0.875rem */
text-align: center;
margin-top: 1rem; /* Assuming "mt-4" translates to 1rem */
`