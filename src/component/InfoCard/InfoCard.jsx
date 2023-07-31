import React, { useState } from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModel from '../ProfileModel/ProfileModel'

const InfoCard = () => {
  const [modalOpen, setModalOpen]=useState(false)
  return (
    <div className='InfoCard'>

        <div className="InfoHead">
            <h4> Your Info</h4>
            <div>
            <UilPen height='1.2rem'
            onClick={()=>setModalOpen(true)}
            width='2rem'/>
            <ProfileModel modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            </div>
        </div>
        <div className="Info">
      <span>
         <b> Status </b>
         </span>
        <span> In RelationShip </span>
        </div>
        <div className="Info">
      <span>
         <b> Lives </b>
         </span>
        <span> Lagos Nigeria </span>
        </div>
        <div className="Info">
      <span>
         <b> Works </b>
         </span>
        <span> Tenecee Group </span>
        </div>
        <button className='button Logout-Button'>Logout</button>
        </div>
  )
}

export default InfoCard