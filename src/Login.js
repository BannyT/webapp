import React from 'react'
 import "./Login.css"

const Login = () => {
  return (
     <section className='login-section'>
         <div className='login-card'>
             <img className='logo' src="./images/statlogo.jpg"/>
            <h2>Welcome Back To Login</h2>
            <p>log in to your application  here</p>
            <form  className='login-form'>
                 <input required type='email' placeholder='Enter your Email' />
                 <input required type='password' placeholder='Enter your Password' />
                 <button>Login</button>
            </form>
            <p className='login-footer'>
                Dont have an Account? <a href='/signup'> SignUp</a>
            </p>
         </div>
     </section>
  )
}

export default Login
