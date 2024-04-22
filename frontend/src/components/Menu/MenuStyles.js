import styled from 'styled-components'

export const MenuWrapper = styled.div`
    background-color:black;
    width:200px;
    z-index:10;
    display:flex;
    flex-direction:column;
    align-items:start;
    position:absolute;
    top:12;
    right:6;
    padding:4px;
    gap:2rem;
    @media screen and (max-width: 768px) {
        right:32;
        border-radius:15px;
    }
`

export const H3=styled.h3`
    color:white;
    font-size:15px;
    cursor:pointer;
    &:hover{
        color:gray;
        cursor:pointer;
        
    }
`