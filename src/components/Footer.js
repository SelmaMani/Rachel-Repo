import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">Recette Magique</div>
      <div className="footer-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#choose">Why Choose Us</a></li>
          <li><a href="#works">How It Works</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <p>Contact Us: example@example.com</p>
      </div>
    </footer>
  );
};

export default Footer;
