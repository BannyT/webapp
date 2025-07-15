import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
import "./TopProperties.css"

const TopProperties = () => {
    const nav = useNavigate();

    const properties = [
        {
          id: 1,
          title: 'Oceanfront Villa',
          location: 'Malibu, California',
          price: '$5,200/month',
          image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          id: 2,
          title: 'Mountain Retreat',
          location: 'Aspen, Colorado',
          price: '$3,400/month',
          image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          id: 3,
          title: 'City Loft',
          location: 'New York, NY',
          price: '$4,800/month',
          image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          id: 4,
          title: 'Santorini Escape',
          location: 'Santorini, Greece',
          price: '$4,200/month',
          image: 'https://images.pexels.com/photos/169677/pexels-photo-169677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
      ];
    
      //javascrio code 
  const  moveToBooking =()=>{
      nav('/booking')
  }

  return (
       <section className="top-properties">
           <h2>Top Properties in Us</h2>
         <input className='search' type="text" placeholder='Search property by name' /> 
         <div className="property-grid">
         {properties.map((prop) => (
          <div className="property-card" key={prop.id}>
            <img className='propimage' src={prop.image} alt={prop.title} />
            <div className="property-details">
              <h3>{prop.title}</h3>
              <p>{prop.location}</p>
              <span>{prop.price}</span>
              <button onClick={moveToBooking} className="book-now">Book Now</button>
            </div>
          </div>
        ))}
         </div><br></br><br></br>
        {/* <Footer/> */}
       </section>
      
  )
}

export default TopProperties