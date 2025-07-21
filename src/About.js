import React from 'react'
import "./About.css"
import Footer from './Footer'

const About = () => {
  return (
      <section className='about-section'>
          <div className='about-container'>
               <div className='about-text'>
                   <h2> About Us</h2>
                   <p className='about-subheading'>Bridging the gap between property owners and tenants </p>
                   <p>
                   Explore a curated selection of properties designed to fit every lifestyle. Whether you’re searching for a modern downtown condo, a spacious family house in the suburbs, or an investment property with high returns, our experienced agents are here to guide you every step of the way.

                From luxury villas with panoramic views to cozy starter homes with character, we make it easy to find the perfect place to call your own. Schedule a private tour today and see why so many clients trust us for their real estate needs.
                   </p>
                   <p>
                   We specialize in connecting buyers and sellers with properties that exceed expectations. From luxury estates and investment opportunities to family homes and urban apartments, our team is committed to providing expert guidance and unparalleled service
                   </p>
               </div>
               <div className='about-image'>
                   <img  src='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D'/>
               </div>
          </div>
          <Footer/>
      </section>
  )
}

export default About
