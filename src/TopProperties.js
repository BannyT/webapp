import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
import "./TopProperties.css"
import { properties } from './PropertyData';

const TopProperties = () => {
    const nav = useNavigate();
    const [query,setQuerry]=useState('')

   
    
      //javascrio code 
  const  moveToBooking =(prop)=>{
       nav('/booking',{
        state:{
          propertyData:prop
        }
       })
  }
   
  const filteredproperties = properties.filter((prop) =>
  prop.title.toLowerCase().includes(query.toLowerCase()) ||
  prop.location.toLowerCase().includes(query.toLowerCase())
);

  return (
       <section className="top-properties">
           <h2>Top Properties in Us</h2>
         <input value={query} onChange={(e)=>setQuerry(e.target.value)} className='search' type="text" placeholder='Search property by name or location' /> 
         <div className="property-grid">
         {filteredproperties.map((prop) => (
          <div className="property-card" key={prop.id}>
            <img className='propimage' src={prop.image} alt={prop.title} />
            <div className="property-details">
              <h3>{prop.title}</h3>
              <p>{prop.location}</p>
              <span>{prop.price}</span>
              <button onClick={()=>moveToBooking(prop)} className="book-now">Book Now</button>
            </div>
          </div>
        ))}
         </div><br></br><br></br>
        {/* <Footer/> */}
       </section>
      
  )
}

export default TopProperties