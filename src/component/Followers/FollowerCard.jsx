import React from 'react'
import './Followers.css'
import {Followers} from '../../Data/FollowersData'

const FollowerCard = () => {
  return (
    <div className="FollowerCard">
      <h3>  Who is following you </h3>
      {Followers.map((follower,index)=>{
        return <div key={index} className="followr">
          <div>
          <img className='followerImg' src={follower.img} alt='pic'></img>
          <div className='name'>
            <span>{follower.name}</span>
            <span> @{follower.userName}</span>

            
             </div>
          </div>
          <button className='button fc-button'>Follow</button>
        </div>
      })}
     

    </div>
  )
}

export default FollowerCard