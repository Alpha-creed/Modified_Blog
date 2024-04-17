import React from 'react'
import { Btn, CatWrapper, Cate, CateWrap, CommInput, CommWrap, CommWrapper, DatesWrapper, H1, H3, Icon, IconWrapper, Img, LoadWrapper, NoLoader, PostDesc, TitleWrapper, UserWrapper } from './PostDetailsStyles'
import Loader from '../../components/Loader'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import { IF } from '../../url'
import Comment from '../../components/Comment/Comment'

const PostDetails = () => {
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