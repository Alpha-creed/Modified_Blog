import React, { useContext, useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import { Cat, Cate, Categ, FileInput, Form, FormButton, FormColumn, FormRow, FormSection, FormTitle, Input, Text } from './EditPostStyles'
import { Container } from '../../GlobalStyles'
import { UserContext } from '../../context/UserContext'
import { useNavigate, useParams } from "react-router-dom"
import { URL } from '../../url'
import axios  from 'axios'
import { ImCross } from 'react-icons/im'
import Navbar from '../../components/Navbar/Navbar'

const Editpost = () => {
    const postId=useParams().id
    const {user}=useContext(UserContext)
    const navigate=useNavigate()
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [file,setFile]=useState(null)
    const [cat,setCat]=useState("")
    const [cats,setCats]=useState([])

    const fetchPost=async()=>{
        try {
            const res=await axios.get(URL+"/api/posts/"+postId)
            setTitle(res.data.title)    
            setDesc(res.data.desc)
            setFile(res.data.photo)
            setCats(res.data.categories)
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleUpdate=async (e)=>{
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
          // console.log(data)
          //img upload
          try{
            const imgUpload=await axios.post(URL+"/api/upload",data)
            // console.log(imgUpload.data)
          }
          catch(err){
            console.log(err)
          }
        }
        //post upload
       
        try{
          const res=await axios.put(URL+"/api/posts/"+postId,post,{withCredentials:true})
          navigate("/posts/post/"+res.data._id)
          // console.log(res.data)
  
        }
        catch(err){
          console.log(err)
        }
      }
  
      useEffect(()=>{
        fetchPost()
      },[postId])

      const deleteCategory=(i)=>{
        let updatedCats=[...cats]
        updatedCats.splice(i)
        setCats(updatedCats)
     }
 
     const addCategory=()=>{
         let updatedCats=[...cats]
         updatedCats.push(cat)
         setCat("")
         setCats(updatedCats)
     }

  return (
    <>
      <Navbar/>
    <Hero/>
    
        <FormSection>     
            <Container>
        {/* <Navbar/> */}
        <FormTitle>Update a post</FormTitle>
        <Form>
            <FormRow>
            <FormColumn>
                
            <Input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Enter post title" style={{marginBottom:"20px"}}/>
            <FileInput onChange={(e)=>setFile(e.target.files[0])} type="file" />       
                    <Input value={cat}  onChange={(e)=>setCat(e.target.value)} type="text" placeholder="Enter post category"/>
                    <FormButton onClick={addCategory} >Add</FormButton>
                

                {/* categories */}
                <Categ>
                    {cats?.map((c,i)=>(
                        <Cate key={i}>
                            <p>{c}</p>
                            <Cat onClick={()=>deleteCategory(i)}><ImCross/></Cat>
                        </Cate>
                    ))}
                </Categ>
            
            <Text  onChange={(e)=>setDesc(e.target.value)} value={desc} rows={15} cols={30} placeholder="Enter post description" />
            <FormButton onClick={handleUpdate}>Update</FormButton>
            </FormColumn>
            </FormRow>
        </Form>
        </Container>
        </FormSection>
        </>
  )
}

export default Editpost