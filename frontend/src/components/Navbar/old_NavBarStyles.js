import styled from 'styled-components'

export const NavWrapper=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:4px 6px;
    @media screen and(max-width:768px){
        padding:0px 200px;
    
    }

`

export const H1=styled.h1`
    font-size:35px;
    font-weight:bold;
    @media screen and(max-width:768px){
        font-size:30px;
    
    }
`

export const PathWrapper=styled.div`
    display:flex;
    jusitify-content:center;
    align-items:center;
    gap:0.5rem;
`
export const PathP=styled.p`
    cursor:pointer;
`
export const PathInput = styled.input`
    outline:none;
    padding:3px;
`
export const MobWrapper = styled.div`
    visibility:hidden;
    align-items:center;
    justify-content:center;
    gap:1rem;
    @media screen and(max-width:768px){
        display:flex;
        gap:2rem;

    
    }
`
export const MenuWrapper = styled.p`
    cursor:pointer;
    position:relative;
`
export const IconWrapper = styled.div`
    font-size:30px;
    @media screen and(max-width:768px){
        visibility:hidden;
    }
`

export const BarsWrapper = styled.p`
    cursor:pointer;
    poistion:relative;
`