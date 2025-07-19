import React,{useState} from 'react'
import "./Signup.css"

const Signup = () => {
  const [email, setEmail]= useState("")
  const [password,setPassword]=useState("")

  console.log(password)
  return (
       <section className='signup-section'>
           <div className='signup-card'>
           <img className='logo' src="./images/statlogo.jpg"/>
              <h2>Create Account</h2>
              <p> Join us and explore amazing properties</p>
              <form className='signup-form'>
                     <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"placeholder='Enter Your Email' />
                     <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter Your Password' />
                     <button>Create Account</button>
              </form>
              <p>Already have an Account? <a href='/login'>Login</a></p>
           </div>
       </section>
  )
}

export default Signup