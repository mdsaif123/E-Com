// import React from 'react'
// import "./CSS/loginsignup.css"

// const loginSignup = () => {
//   return (
//     <div className='loginsignup'>
//     <div className="loginsignup-container">
//       <h1>Sign Up</h1>
//       <div className="loginsignup-fields">
//         <input type="text" placeholder=' Your Name *' />
//         <input type="email"  placeholder=' Email *'/>
//         <input type="password" placeholder='Password' />
//       </div>
//       <button>Continue</button>
//       <p className="loginsignup-login">
//         Alreday hae an account? <span>Login here</span>
//       </p>
//       <div className="loginsignup-agree">
//         <input type="checkbox" name='' id='' />
//         <p>By continue , I agree to the terms of use & privacy policy.</p>
//       </div>
//     </div>
      
//     </div>
//   )
// }

// export default loginSignup


import React from 'react';
import "./CSS/loginsignup.css";

const LoginSignup = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-md-6'>
                    <div className="loginsignup-container">
                        <h1 className="text-center mb-4">Sign Up</h1>
                        <div className="loginsignup-fields mb-3">
                            <input type="text" className="form-control mb-3" placeholder='Your Name *' />
                            <input type="email" className="form-control mb-3" placeholder='Email *' />
                            <input type="password" className="form-control mb-3" placeholder='Password' />
                        </div>
                        <button className="btn btn-primary btn-block mb-3 w-100" style={{background:"#ff4141", border:"none"}}>Continue</button>
                        <p className="loginsignup-login text-center mb-3">
                            Already have an account? <span>Login here</span>
                        </p>
                        <div className="loginsignup-agree">
                            <input type="checkbox" name='' id='' className="me-2" />
                            <p>By continuing, I agree to the terms of use & privacy policy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
