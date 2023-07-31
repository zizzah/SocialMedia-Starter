import React from 'react'
import './Posts.css'
import { PostData } from '../../Data/PostsData'
import Post from '../post/Post'

const Posts = () => {
  return (
    <div className='Post'>
   {PostData.map((post,id)=>{
    return <Post data={post} key={id}/>
   })} 
   
    </div>
  )
}

export default Posts