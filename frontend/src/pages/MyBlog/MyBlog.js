import React, { useContext, useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { H3, Posts } from './MyBlogStyles'
import Loader from '../../components/Loader'
import HomePosts from '../../components/HomePost/HomePosts'
import axios from 'axios'

const MyBlog = () => {
  const {search} = useLocation()
  const [posts,setPosts] = useState([])
  const [noResults,setNoResults] = useState(false)
  const [loader,setLoader] = useState(false)
  const {user} = useContext(UserContext)

  const fetchPosts=async()=>{
    setLoader(true)
    try{
      const res=await axios.get(URL+"/api/posts/user/"+user._id)
      // console.log(res.data)
      setPosts(res.data)
      if(res.data.length===0){
        setNoResults(true)
      }
      else{
        setNoResults(false)
      }
      setLoader(false)
      
    }
    catch(err){
      console.log(err)
      setLoader(true)
    }

  }

  useEffect(()=>{
      fetchPosts()
  },[search])

  return (
    <div>
      {loader?<Posts><Loader/></Posts>:!noResults?
      posts.map((post)=>(
        <>
          <Link to={user?`/posts/post${post._id}`:"/login"}>
            <HomePosts/>
          </Link>
        </>
      )):<H3>No Post Available</H3>
    }
    </div>
  )
}

export default MyBlog