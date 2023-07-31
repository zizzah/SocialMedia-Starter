import React,{useState,useRef} from 'react'
import './PostShare.css'
import ProfileImage from '../../img/profileImg.jpg'
import {UilScenery} from '@iconscout/react-unicons'
import {UilPlayCircle} from '@iconscout/react-unicons'
import {UilLocationPoint} from '@iconscout/react-unicons'
import {UilSchedule} from '@iconscout/react-unicons'
import {UilTimes} from '@iconscout/react-unicons'




const PostShare = () => {
const [image,setImage]=useState(null)
const [video,setVideo]=useState(null)

const imageRef=useRef()
const videoRef=useRef()
const imageChanged= (event)=>{
     if(event.target.files && event.target.files[0]){
        let image = event.target.files[0]
        setImage({
            image:URL.createObjectURL(image)
        })
     }
}

const videoChanged= (event)=>{
     if(event.target.files && event.target.files[0]){
        let video = event.target.files[0]
        setVideo({
            video:URL.createObjectURL(video)
        })
     }
}
     
  return ( 
    <div className='PostShare'>
        <div className='test'>
        <img src={ProfileImage} alt='profile' className='ProfileImage'></img>
        <input  type='text' placeholder='What Is Happing?'   />
        </div>
    <div>
     <div className="PostOptions">
        <div style={{color:'var(--photo)'}} className="options"
        onClick={()=>imageRef.current.click()}
        >
            <UilScenery/>
            Photo
        </div>
        <div  onClick={()=>videoRef.current.click()} style={{color:'var(--video)'}} className="options">
            <UilPlayCircle/>
            Video
        </div>
        <div style={{color:'var(--location)'}} className="options">
            <UilLocationPoint/>
            Location
        </div>
        <div style={{color:'var(--shedule)'}} className="options">
            <UilSchedule/>
            Schedule
        </div>
        <button className='button ps-button'>Share</button>
    </div>
 <div style={{display:'none'}}>
        <input type="file" name="myImage" ref={imageRef} onChange={imageChanged} />
        <input type="file" name="myVideo" ref={videoRef} onChange={videoChanged} />

    </div>

    </div>
   
      {image && (

        <div className="previewImage">
        <UilTimes onClick={()=>setImage(null)}/>
        <img alt='' src={image.image}></img>
        </div>
      )}
        {video && (

<div className="previewImage">
<UilTimes onClick={()=>setVideo(null)}/>
<video src={video.video}></video>
</div>
)}
        </div>
  )
}

export default PostShare