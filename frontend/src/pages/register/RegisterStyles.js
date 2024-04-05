import styled from "styled-components";


export const Overall = styled.div`
background:#101522;
height:100vh;
padding:160px 0;
`;

export const Err = styled.header`
    background:red;
    color:white;
    width:auto;
height100%;
padding:20px 150px;
font-size:20px;
`;

export const Wrapper = styled.div`
display: flex;
justify-content: center;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
`;

export const Left = styled.span`
/* margin-bottom: 15px; */
padding: 50px;
background: white;
border: 20px;
/* padding: ${({ small }) => (small ? '0 50px' : '0 15px')}; */
flex: 1;
max-width: 60%;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
flex-direction: column;
@media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
}

img {
    @media screen and (max-width: 768px) {
        display: none;
    }
}
`;
export const LoginName = styled.h1`
        font-size:40px;
        margin-bottom: 24px;
	line-height: 1.1;
	font-weight: 600;
`;
export const LoginDetails=styled.div`
padding-top: 0;
width: 100%;
`;
export const Input = styled.input`
display: block;
padding-left: 10px;
outline: none;
border-radius: 2px;
height: 40px;
width: 100%;
border: none;
border-bottom: 1px solid #cfcfcf;
font-size: 1rem;
`; 

export const Btn = styled.button`
border-radius: 4px;
background: none;
margin-top: 1.5rem;
white-space: nowrap;
/* color: #fff; */ 
outline: none;
width: 100%;
font-size: 1.4rem;
padding: 5px 15px;
border: 2px solid black;
cursor: pointer;
position: relative;
overflow: hidden;

&:hover {
    color: white;
    transition: background-color 0.4s ease-in;
    background-color: black;
}
`;

export const Right = styled.span`
    grid-column:2;
    grid-row:1;
    margin-left:10px;
`;

export const InputRow=styled.div`
    display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 1.4rem;

	> p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
`;
export const Label=styled.label`
display: inline-block;
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	color: #afafaf;
`;

export const Footer = styled.footer`
width:100%;
padding-top:30px;
justify-content:center;
color:black;
font-size:20px;
display:flex;
align-items:center;
@media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
}
`;
export const Message=styled.div`
color: ${({ error }) => (error ? 'red' : 'green')};
padding: 5px;
text-align: center;
margin-top: 1rem;
`