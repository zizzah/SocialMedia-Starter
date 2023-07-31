import React from 'react'
import './Profile.css'
import ProfileLeft from '../../component/ProfileLeft/ProfileLeft'
import ProfileCard from '../../component/ProfileCard.jsx/ProfileCard'
import PostSide from '../../component/PostSide/PostSide'
import RightSide from '../../component/RightSide/RightSide'


const Profile = () => {
  return (
    <div className='Profile'>
        <ProfileLeft/>
        <div className="Profile-center">
            <ProfileCard/>
            <PostSide/>
        </div>
          <RightSide/>
        </div>
  )
}

export default Profile