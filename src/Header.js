import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">🏡 Stratcom Computer School</Link>
      </div>

       <nav className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <div className="navbar__auth">
          <Link to="/login" className="btn login">Login</Link>
          <Link to="/signup" className="btn signup">Sign Up</Link>
        </div>
      </nav> 
       <div className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div> 
    </header>
  );
};

export default Header;
