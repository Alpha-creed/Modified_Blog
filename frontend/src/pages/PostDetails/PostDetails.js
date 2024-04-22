import React from 'react'
import { Btn, CatWrapper, Cate, CateWrap, CommInput, CommWrap, CommWrapper, DatesWrapper, H1, H3, Icon, IconWrapper, Img, LoadWrapper, NoLoader, PostDesc, TitleWrapper, UserWrapper } from './PostDetailsStyles'
import Loader from '../../components/Loader'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import Comment from '../../components/Comment/Comment'
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { UserContext } from '../../context/UserContext'
import { IF } from '../../url'

const PostDetails = () => {
  const postId=useParams().id
  const [post,setPost]=useState({})
  const {user}=useContext(UserContext)
  const [comments,setComments]=useState([])
  const [comment,setComment]=useState("")
  const [loader,setLoader]=useState(false)
  const navigate=useNavigate()
  
  const fetchPost=async()=>{
    try{
      const res= await axios.get(URL+"/api/posts/"+postId)
      // console.log(res.data)
      setPost(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

  const handleDeletePost=async ()=>{

    try{
      const res=await axios.delete(URL+"/api/posts/"+postId,{withCredentials:true})
      console.log(res.data)
      navigate("/")

    }
    catch(err){
      console.log(err)
    }

  }

  useEffect(()=>{
    fetchPost()

  },[postId])

  const fetchPostComments=async()=>{
    setLoader(true)
    try{
      const res=await axios.get(URL+"/api/comments/post/"+postId)
      setComments(res.data)
      setLoader(false)

    }
    catch(err){
      setLoader(true)
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchPostComments()

  },[postId])

  const postComment=async(e)=>{
    e.preventDefault()
    try{
      const res=await axios.post(URL+"/api/comments/create",
      {comment:comment,author:user.username,postId:postId,userId:user._id},
      {withCredentials:true})
      
      // fetchPostComments()
      // setComment("")
      window.location.reload(true)

    }
    catch(err){
         console.log(err)
    }

  }


  return (
    <div>
      {loader?<LoadWrapper><Loader/></LoadWrapper>:<NoLoader>
        <TitleWrapper>
          <H1>{post.title}</H1>
          {user?.id===post?.userId &&<IconWrapper>
            <Icon onClick={()=>navigate("/edit/"+postId)}><BiEdit/></Icon>
            <Icon onClick={handleDeletePost}><MdDelete/></Icon>
            </IconWrapper>}
        </TitleWrapper>
        <UserWrapper>
          <p>@{post.username}</p>
          <DatesWrapper>
          <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
          </DatesWrapper>
        </UserWrapper>
        <Img src={IF+post.photo} alt=""/>
        <PostDesc>{post.desc}</PostDesc>
        <CatWrapper>
          <p>Categories:</p>
          <CateWrap>
            {post.categories?.map((c,i)=>(
              <>
                <Cate key={i}>{c}</Cate>
              </>
            ))}
          </CateWrap>
        </CatWrapper>
        <CommWrapper>
          <H3>Comments:</H3>
          {comments?.map((c)=>(
            <Comment key={c._id} c={c} post={post}/>
          ))}
        </CommWrapper>
        {/* write a comment */}
        <CommWrap>
          <CommInput onChange={(e)=>setComment(e.target.value)} type="text" placeholder="Write a comment"/>
          <Btn onClick={postComment}>Add Comment</Btn>
        </CommWrap>
      </NoLoader>}

    </div>
  )
}

export default PostDetails