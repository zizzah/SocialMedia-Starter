import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard.jsx/ProfileCard'
import './ProfileSide.css'
import FollowerCard from '../Followers/FollowerCard'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch />
        <ProfileCard/>
        <FollowerCard />
    </div>
  )
}

export default ProfileSide