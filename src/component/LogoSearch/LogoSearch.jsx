import React from 'react'
import Logo from  '../../img/logo.png'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './LogoSearch.css'


const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
        <img src={Logo} alt='logo' className='logo'/>
        <div className='search'>
     <input type="text" placeholder='#Explore' />
     <div className='s-icon' >
          <SearchRoundedIcon/>
     </div>
        </div>
    </div>
  )
}

export default LogoSearch