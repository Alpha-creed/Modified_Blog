import React, { useContext } from 'react'
import { Comm, CommentSection, DateWrapper, Del, DelWrapper, H3, Wrapper } from './CommentStyled'
import { MdDelete } from "react-icons/md"
import { UserContext } from '../../context/UserContext'
import  axios  from 'axios'
import { URL ,IF} from '../../url'

const Comment = ({c,post}) => {
    const {user}=useContext(UserContext)
    const deleteComment=async(id)=>{
        try {
            await axios.delete(URL+"/api/comments/"+id,{withCredentials:true})
            window.location.reload(true)
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Wrapper>
        <CommentSection>
            <H3>@{c.author}</H3>
            <DateWrapper>
            <p>{new Date(c.updatedAt).toString().slice(0,15)}</p>
            <p>{new Date(c.updatedAt).toString().slice(16,24)}</p>
            {user?._id===c?.userId?
            <DelWrapper>
                <Del onClick={()=>deleteComment(c.id)}><MdDelete/></Del>
            </DelWrapper>:"" 
        }
            </DateWrapper>
        </CommentSection>
        <Comm>{c.comment}</Comm>
    </Wrapper>
  )
}

export default Comment