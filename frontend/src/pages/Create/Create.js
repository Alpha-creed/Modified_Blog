import React from 'react'
import styled from 'styled-components'
import {ImCross} from 'react-icons/im'
import { useContext, useState } from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import {URL} from '../../url'
import {UserContext} from '../../context/UserContext'

const Create = () => {
    const [title,setTitle]=useState("")
    const [desc,setDesc] = useState("")
    const [file,setFile] = useState(null)
    const {user} = useContext(UserContext)
    const [cat,setCat] = useState("")
    const [cats,setCats] = useState([])

    const navigate = useNavigate()

    const deleteCategory=(i)=>{
        let updatedCats=[...cats]
        updatedCats.splice(i)
        setCats(updatedCats)
    }
    const addCategory=()=>{
        let updatedCats=[...cats]
        updatedCats.push(cat)
        setCats("")
        setCats(updatedCats)
    }
    const handleCreate=async(e)=>{
        e.preventDefault()
        const post={
            title,
            desc,
            username:user.username,
            userId:user._id,
            categories:cats
        }
        if(file){
            const data=new FormData()
            const filename=Date.now()+file.name
            data.append("img",filename)
            data.append("file",file)
            post.photo=filename
            try {
                const imgUpload = await axios.post(URL+"/api/upload",data)
            } catch (error) {
                console.log(error)
            }
        }
        //post upload
        try{
            const res=await axios.post(URL+"/api/posts/create",post,{withCredentails:true})
            navigate("/posts/post/"+res.data._id)
        }catch(error){
            console.log(error);
        }
    }
  return (
    <Wrapper>
        {/* <Navbar/> */}
        <h1>Create a post</h1>
        <Form>
            <Input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter post title"/>
            <input onChange={(e)=>setFile(e.target.files[0])} type="file" style={{width:"100px",fontSize:"15px"}}/>
            <Content>
                <ConWrap>
                    <Input value={cat}  onChange={(e)=>setCat(e.target.value)} type="text" placeholder="Enter post category"/>
                    <Add onClick={addCategory} >Add</Add>
                </ConWrap>

                {/* categories */}
                <Categ>
                    {cats?.map((c,i)=>(
                        <Cate key={i}>
                            <p>{c}</p>
                            <Cat onClick={()=>deleteCategory(i)}><ImCross/></Cat>
                        </Cate>
                    ))}
                </Categ>
            </Content>
            <Text onChange={(e)=>setDesc(e.target.value)} rows={15} cols={30} placeholder="Enter post description" />
            <Button onClick={handleCreate}>Create</Button>
        </Form>
        </Wrapper>
  )
}

const Wrapper = styled.div`
    padding:10px;
    magin:10px;
   

`
const Text=styled.textarea`
padding:10px 15px;
outline:none;
`

const Button = styled.button`
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
const Cat = styled.p`
    color:white;
    background:black;
    border-radius:5px;
    cursor:pointer;
    padding:10px;
    
`
const Cate = styled.div`
    display:flex;
    justify-content:center;
    align-items:center
    border-radius:5px;
    background:gray;
    margin:10px;
`
const Categ = styled.div`
    display:flex;
    padding:10px;
    margin:10px;
`
const Add = styled.div`
    background:black;
    color:white;
    padding:15px 10px;
    cursor:pointer;
    width:100px;
    align-items:center;
    display:flex;
    justify-content:center;
`

const Form = styled.form`
width:100%;
display:flex;
flex-direction:column;
`

const Input = styled.input`
padding:20px;
outline:none;
`
const Content = styled.div`
display:flex;
flex-direction:column;
gap:10px;
margin-top:20px;
`
const ConWrap = styled.div`
    display:flex;
    justify-content:start;

`
export default Create