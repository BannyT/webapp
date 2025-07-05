import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
       <section className='signup-section'>
           <div className='signup-card'>
           <img className='logo' src="./images/statlogo.jpg"/>
              <h2>Create Account</h2>
              <p> Join us and explore amazing properties</p>
              <form className='signup-form'>
                     <input type="email"placeholder='Enter Your Email' />
                     <input type="password"placeholder='Enter Your Password' />
                     <button>Create Account</button>
              </form>
              <p>Already have an Account? <a href='/login'>Login</a></p>
           </div>
       </section>
  )
}

export default Signup