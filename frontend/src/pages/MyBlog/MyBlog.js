import React, { useContext, useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { H3, Posts } from './MyBlogStyles'
import Loader from '../../components/Loader'
import HomePosts from '../../components/HomePost/HomePosts'


const MyBlog = () => {
  const {search} = useLocation()
  const [posts,setPosts] = useState([])
  const [noResults,setNoResult] = useState(false)
  const [loader,setLoader] = useState(false)
  const {user} = useContext(UserContext)

  const fetchPosts=async()=>{
    // setLoader(true)
    // try {
      
    // } catch (error) {
      
    // }

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