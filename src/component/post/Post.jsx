import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLiked from '../../img/notlike.png'

const Post = ({data}) => {
  return (
    <div className='Post'>
        <img alt='' src={data.img}/>
        <div className="postReact">
            <img alt='' src={data.liked?Heart:NotLiked}/>
            <img alt='' src={Comment}/>
            <img alt='' src={Share}/>
        </div>
        <span style={{color:'var(--gray),',fontSize:'12px'}}>{data.like} Likes </span>

         <div className="details">
            <span>{data.name}</span>
         </div>

    </div>
  )
}

export default Post