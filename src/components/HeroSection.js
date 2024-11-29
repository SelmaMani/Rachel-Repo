// HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom
import '../App.css'; // Assurez-vous d'importer le fichier App.css
import CookieConsent from './CookieConsent'; // Ajustez le chemin d'importation si nécessaire

const HeroSection = () => {
  return (
    <div className="hero">
      <h1 className="title-big">Trouvez de Délicieuses Recettes avec Ce que Vous Avez Chez Vous</h1>
      <p className="text-normal">Laissez-nous trouver pour vous les meilleures recettes en utilisant uniquement ce que vous avez à disposition chez vous.</p>
      <Link to="/login"> {/* Utilisez Link pour naviguer */}
        <button className="start title-medium">Obtenez Votre Recette</button>
      </Link>
      <CookieConsent /> {/* Ajoutez le composant CookieConsent ici */}
    </div>
  );
};

export default HeroSection;
