import React from 'react';
import '../App.css';
import logo from '../assets/logo.png'; // Importer le logo

const Footer = () => {
  return (
    <>
      <div className="dashed-line"></div> {/* Ligne pointillée */}
      <footer>
        <div className="footer-logo">
          <img src={logo} alt="Logo Recette Magique" />
          <p className="text-normal-volkorn">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#home" className="text-normal-volkorn">Accueil</a></li>
            <li><a href="#choose" className="text-normal-volkorn">Pourquoi Nous Choisir</a></li>
            <li><a href="#works" className="text-normal-volkorn">Comment Ça Marche</a></li>
            <li><a href="#contact" className="text-normal-volkorn">Contactez-Nous</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <p className="text-normal-volkorn">Contactez-Nous</p>
          <p className="text-normal">example@example.com</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
