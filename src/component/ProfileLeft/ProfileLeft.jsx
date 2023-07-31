import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import FollowerCard from '../Followers/FollowerCard'
import InfoCard from '../InfoCard/InfoCard'
import '../ProfileSide/ProfileSide.css'


const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch/>
    <InfoCard/>
      <FollowerCard/>
    </div>
  )
}

export default ProfileLeft