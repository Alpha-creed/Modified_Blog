import styled from 'styled-components'

export const Wrapper = styled.div`
    width:100%;
    display:flex;
    margin-top:2rem;
    gap:1rem;
`
export const Left=styled.div`
    width:35%;
    height:200px;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Img=styled.img`
    height:100%;
    width:100%;
    object-fit:cover;
`

export const Right = styled.div`
    display:flex;
    flex-direction:column;
    width:65%;
`
export const H1 = styled.h1`
    font-size:1.25rem;
    font-weight:bold;
    margin-bottom:1rem;
    @media screen and(max-width:768px){
    margin-bottom: 0.5rem; /* md:mb-2 */
    font-size: 1.5rem; /* md:text-2xl */
}
`
export const UserName=styled.div`
    display:flex;
    font-size:15px;
    font-weight:500;
    color:gray;
    align-items:center;
    justify-content:space-between;
    @media screen and(max-width:768px){
        margin-bottom: 1rem;
    }
`

export const DateWrapper=styled.div`
    display:flex;
    gap:1rem;
`

export const More = styled.p`
    font-size:12px;
    @media screen and(max-width:768px){
        font-size:18px;
    }
`