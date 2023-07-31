import React from 'react'
import './SignUp.css'

const SignUp = () => {
    
        return(
            <div className='a-right'>
                <form action="" className="infoForm">
                    <h3> Sign Up </h3>
                    

                    <div>
                        <input type="text" className='infoInput'
                         placeholder='First Nam' name='firstName' />

                            <input type="text" className='infoInput'
                         placeholder='Last Name' name='LastName' />
                        </div>


                        <div>
                        <input type="text" className='infoInput'
                         placeholder='Username'  name='userName' />
                        </div>
                        
                         <div>
                         <input type='password' className='infoInput'
                         placeholder='Password' name='password' />

                            <input type='password' className='infoInput'
                         placeholder='Confirm Password' name='RePassword' />
                         </div>
                         
                
                    <div>
                        <span style={{fontSize:'12px'}}>Alread have an account. Login</span>
                    </div>
                    <button className='button infoButton' type='submit'> Sign Up</button>

                </form>
                <Login/>

            </div>
        )
    
    
}

function Login(){
    return(
        <div className="a-right">
            <form action="" className="infoForm authForm">
                <h3>Log In</h3>
                <div>
                    <input type="text" placeholder='Username'
                    name='username'
                     className='infoInput' />
                </div>

                <div>
                    <input type="password" placeholder='password'
                    name='password'
                     className='infoInput' />
                </div>
                <div>
                <span style={{fontSize:'12px'}}>Don't have an accout sign up here</span>

                <button className='button infoButton' type='submit'> Log In</button>

                </div>

            </form>


        </div>
    )
}

export default SignUp