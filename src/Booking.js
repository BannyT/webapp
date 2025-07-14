import React from 'react'
import "./Booking.css"
const Booking = () => {
  return (
    <section  className='booking-wrapper'>
        <div className='booking-card'>
             <div className='property-summary'>
                   <img src='https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D'/>
                   <div className='property-details'>
                        <h2>Modern Villa Beach House</h2>
                        <p>Los Angeles ,California</p>
                        <p> <strong>usd 100 per night</strong></p>
                   </div>
                   <form className='booking-form'>
                         <h2>Book Your Stay</h2>
                         <input  type="text" placeholder="Enter full Name"/>
                         <input  type="email" placeholder="Enter Email"/>
                          <label>Checkin Date</label>
                         <input  type="date" />
                         <label>Check Out Date</label>
                         <input  type="date" />
                         <label>Number of people</label>
                         <input  type="number" />
                         <button> Confirm Booking</button>
                   </form>
             </div>
        </div>
    </section>
  )
}

export default Booking
