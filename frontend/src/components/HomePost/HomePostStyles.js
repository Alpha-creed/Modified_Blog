import styled from "styled-components"

export const Wrapper=styled.div`
width:100%;
display:flex;
gap:15px;
// flex-wrap:wrap;
align-items:center;
flex-direction:column;
border:1px black;
padding:10px;
@media screen and(max-width:768px){
    flex-direction:row;        
}
`
export const Img = styled.img`
width:150px;
Object-fit:cover;
@media screen and(max-width:768px){
Object-fit:cover;

}
`
export const Title=styled.div`
display:flex;
// flex-direction:row;
justify-content:space-evenly;
align-items:center;
@media screen and(max-width:768px){
    display:flex;
    gap:15px;     
    justify-content:space-around;

}
`;
export const SubHeading=styled.h2`
   
`;
export const Header=styled.h5`

`

export const ImgWrapper=styled.div`
display: flex;
justify-content: 'flex-end';
max-height: 700px;
justify-content: center;
position: relative;
`

export const TextWrapper=styled.div`
    max-width: 840px;
    padding-top: 0;

    @media screen and (max-width:768px) {
            text-align: center;
        width:100%;
        text-wrap:wrap;
        padding: 10px;
    }
`;

export const ContentColumn=styled.div`
    margin-bottom:15px;
    padding-right:15px;
    padding-left:15px;
    flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: row;
    gap:25px;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: space-evenly;
        flex-direction:column;
		align-items: center;
	}
`;

export const Timeline=styled.span`
color:gray;
font-size:15px;

`

export const Content=styled.div`
    display:flex;
    justify-content:space-evenly;
    gap:15px;
    @media screen and(max-width:768px){
        flex-direction:column-reverse;        
    }
`