import styled from 'styled-components'

export const LoadWrapper = styled.div`
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
`
export const TitleWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const H1=styled.h1`
    font-weight:bold;
    font-size:0.5rem;
    color:black;
    @media screen and(max-width:768px){
        font-size:1rem;
    }
`
export const IconWrapper=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:1rem;
`
export const Icon=styled.p`
    cursor:pointer;
`
export const UserWrapper=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:1rem;
    @media screen and(max-width:768px){
       margin-top:2rem;
    }
`
export const DatesWrapper=styled.div`
    display:flex;
    gap:1rem;
`
export const Img=styled.img`
    width:100%;
    margin:8px auto;
`
export const PostDesc =styled.p`
margin:8px auto;
`

export const CatWrapper=styled.div`
    display:flex;
    align-items:center;
    margin-top:8px;
    gap:2rem;
    font-weight:semibold;

`
export const CateWrap=styled.div`
    display:flex;
    align-items:center;
    gap:1rem;
    justify-content:center;
`
export const Cate=styled.div`
    background-color: #e0e0e0; /* Assuming gray-300 translates to #e0e0e0 */
    border-radius: 0.5rem; /* Assuming rounded-lg translates to 0.5rem */
    padding: 1rem 3rem; /* Using rem for responsiveness (optional) */
`

export const CommWrapper=styled.div`
    dislay:flex;
    flex-direction:column;
    margin-top:4px;
`

export const H3=styled.h3`
    margin-top:6px;
    margin-bottom:4px;
    font-weight:semibold;
`
export const CommWrap=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin-top:4;
    @media screen and(max-width:768px){
        flex-direction:row;
     }
`
export const CommInput=styled.input`
outline:none;
paddding:2px 4px;
margin-top:8px;
@media screen and(max-width:768px){
    width:80%;
    margin-top:0px;

 }
`
export const Btn=styled.button`
     background-color:black;
     font-size:0.25rem;
     color:white;
     padding:1rem;
     margin-top:4px;
     @media screen and(max-width:768px){
        width:20%;
        margin-top:0px;
     }
`
export const NoLoader=styled.div`
     padding:0rem 2rem;
     margin-top:4rem;
     @media screen and(max-width:768px){
        padding:200px;
     }
`