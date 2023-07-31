import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'
import {PostData} from '../../Data/PostsData'


const ProfileCard = () => {
  const profilePage = true;
  return (
<div className="ProfileCard">
    <div className="profileImages">
        < img src={Cover} alt='ima' />
        <img src={Profile} alt=''/>
    </div>
    <div className="profileName">
        <span>MIRACLE EL-ZIZZAH</span>
        <span>Senior Fullstack Dev</span>
    </div>
    <div className="stausFollower">
        <hr></hr>
        <div>
        <div className="follow">
           <span>80,000</span>
           <span>Followings</span>
           
        </div>
        <div className='val'></div>
        <div className="follow">
           <span>1</span>
           <span>Followers</span>
        </div>
        {profilePage &&(
          <>
          <div className="val">

          </div>
           <div className="follow">
            <span>{PostData.length}</span>
            <span>Posts</span>
           </div> 
          </>

        )}
        </div>
        <hr></hr>
    </div>
    {profilePage ?'' : <span> My Profile</span>}
</div>
  )
}

export default ProfileCard