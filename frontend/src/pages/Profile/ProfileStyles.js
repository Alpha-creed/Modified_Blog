import styled from 'styled-components'

export const ProfileSection=styled.div`
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