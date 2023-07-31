import React,{useState} from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/shareModal'

const RightSide = () => {
  const [modalOpen, setModalOpen]=useState(false)

  return (
    <div className='RightSide'>

        <div className="navIcon">
            <img alt='' src={Home} />
            <UilSetting/>
            <img alt='' src={Noti} />
            <img alt='' src={Comment} />
        </div>
        <TrendCard/>
        <button className='button' style={{width:'100%', alignItems:'center',
         fontSize:'20px',backgroundColor:'var(--orange)',height:'3rem'}}
         onClick={()=>setModalOpen(true)}
         >
         
            share </button>

            <ShareModal
            modalOpen={modalOpen}
             setModalOpen={setModalOpen}

            />
            
    </div>
  )
}

export default RightSide