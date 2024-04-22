import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Hero from '../../components/Hero/Hero'
import HomePosts from '../../components/HomePost/HomePosts'
import { Link, useLocation } from "react-router-dom"
import { UserContext } from '../../context/UserContext'
import { LoaderRole, NotAvial } from './HomeStyles'
import Loader from '../../components/Loader'


const Home = () => {
  const {search} = useLocation()
  const [posts,setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)
  const {user} = useContext(UserContext)

  const fetchPosts=async()=>{
    setLoader(true)
    try{
      const res=await axios.get(URL+"/api/posts/"+search)
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
    <>
    {loader?<LoaderRole><Loader/></LoaderRole>:!noResults?
    posts.map((post)=>(
      <>
        <Hero/>
        <Link to={user?`/posts/post/${post._id}`:"/login"}>
          <HomePosts key={post._id} post={post}/>
          </Link>
      </>
    )):
    <>
        <Hero/>
    <NotAvial>No Post Avialable</NotAvial>
    </>}
    </>
  )
}

export default Home