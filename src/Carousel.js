import React from 'react'
import "./Carousel.css"

const Carousel = () => {
    
    const slides = [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1600&q=80',
          title: 'Luxury Villa in Los Angeles',
          subtitle: '$4,200/month - 5 Bed, 4 Bath',
        },
        {
          id: 6,
          image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          title: 'Modern Beachfront Villa',
          subtitle: '$5,000/month – Ocean View & Infinity Pool',
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80',
          title: 'Modern Apartment in New York',
          subtitle: '$2,200/month - Central Park View',
        },
      ];

  return (
    <div className='carousel'>
         {slides.map((slide,index)=>(
              <div
              className={`carousel__slide ${index === current ? 'active' : ''}`}
              key={slide.id}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="carousel__caption">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
                <button className="carousel__btn">Book Now</button>
              </div>
            </div>
         ))

         }
    </div>
  )
}

export default Carousel