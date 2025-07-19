import React from 'react'
import "./ContactUs.css"

const ContactUS = () => {
  return (
     <section  className="contact-wrapper">
           <div className='contact-card'>
               <div className='contact-left'>
                <h2>Lets Talk About Real Estate</h2>
                    <p>Have a questio\n, Feedback, or looking to list your Property , Fill the form on the right</p>
                    <div className='contact-info'>
                        <p><strong>Email:</strong> tumusiime@gmail.com</p>
                        <p><strong>Phone:</strong> 0706735473</p>
                        <p><strong>Location:</strong> Akright Bwebajja, Entebbe</p>
                    </div>
               </div>
               <form className='contact-form'>
                    <input type="text" placeholder='Enter Full NAme' />
                    
                    <input type="Email" placeholder='Enter Email Address' />
                    <textarea rows="5" placeholder='Enter your MEssage'>

                    </textarea>
                    <button>Send Message</button>
               </form>

           </div>
     </section>
  )
}

export default ContactUS