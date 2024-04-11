import styled from "styled-components"

export const Wrapper = styled.div`
    padding:10px;
    magin:10px;
    @media screen and(max-width:768px){
        margin-top:8px;
        width:200px
    
    }

`

export const FormTitle=styled.h1`
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
`;

export const FormSection=styled.div`
    padding:50px 0px;
    background: #0f9fff;
`;

export const FormColumn = styled.div`
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

export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
`;

export const FormButton = styled.button`
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



export const Text=styled.textarea`
padding:10px 15px;
width:100%;
outline:none;
@media screen and(max-width:768px){
   font-size:20px;
   width: 40ch;
}
`
export const FileInput=styled.input`
border-radius: 3px;
padding: 5px 8px;
outline: none;
white-space: nowrap;
cursor: pointer;
text-shadow: 1px 1px #fff;
font-weight: 700;
font-size: 10pt;
display: flex;
justify-content:flex-start;

`

export const Button = styled.button`
    background:black;
    width:100%;
    height:40px;
    margin:auto;
    color:white;
    font-size:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px 15px
`
export const Cat = styled.p`
    color:white;
    background:black;
    border-radius:5px;
    cursor:pointer;
    padding:10px;
    
`
export const Cate = styled.div`
    display:flex;
    justify-content:center;
    align-items:center
    border-radius:5px;
    background:gray;
    margin:10px;
`
export const Categ = styled.div`
    display:flex;
    padding:10px;
    margin:10px;
`
export const Add = styled.div`
    background:black;
    color:white;
    padding:15px 10px;
    cursor:pointer;
    width:100px;
    align-items:center;
    display:flex;
    justify-content:center;
`

export const Form = styled.form`
padding-top: 0;
	width: 100%;
`
export const FormInputRow = styled.div`
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
`
export const Content = styled.div`
display:flex;
flex-direction:column;
gap:10px;
margin-top:20px;
`
export const ConWrap = styled.div`
    display:flex;
    justify-content:start;

`