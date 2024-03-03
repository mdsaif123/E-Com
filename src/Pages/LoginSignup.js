import React from 'react'
import "./CSS/loginsignup.css"

const loginSignup = () => {
  return (
    <div className='loginsignup'>
    <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder=' Your Name *' />
        <input type="email"  placeholder=' Email *'/>
        <input type="password" placeholder='Password' />
      </div>
      <button>Continue</button>
      <p className="loginsignup-login">
        Alreday hae an account? <span>Login here</span>
      </p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p>By continue , I agree to the terms of use & privacy policy.</p>
      </div>
    </div>
      
    </div>
  )
}

export default loginSignup
