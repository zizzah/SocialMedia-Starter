import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import SignUp from './SignUp'



const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="webName">
                <h1>ZKC Media</h1>
                <h6>Exploring the idea of throughout the world</h6>
            </div>
        </div>
        <SignUp/>
    </div>
  )
}


export default Auth