import React from 'react';
import '../App.css';
import logo from '../assets/logo.png'; // Import the image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" /> {/* Use the imported image */}
      </div>
      <ul className="nav-links">
        <li className="text-normal-volkorn"><a href="#menu">Menu</a></li>
        <li className="text-normal-volkorn"><a href="#about">About</a></li>
        <li className="text-normal-volkorn"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
