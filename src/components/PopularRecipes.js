import React from 'react';
import '../App.css'; // Assurez-vous que votre CSS est correctement lié
import risottoImg from '../assets/risotto.png'; // Importer les images
import enchiladaImg from '../assets/enchiladas.png';
import greekSaladImg from '../assets/greek.png';

const PopularRecipes = () => {
  return (
    <section className="popular-recipes">
      <h2 className="section-title title-big">Recettes Populaires</h2>
      
      {/* Boutons des catégories de recettes */}
      <div className="recipe-categories">
        <button className="category-button text-normal-volkorn active">Cuisines</button>
        <button className="category-button text-normal-volkorn">Préférences Alimentaires</button>
        <button className="category-button text-normal-volkorn">Types de Repas</button>
        <button className="category-button text-normal-volkorn">Régimes Spéciaux</button>
      </div>

      {/* Grille des éléments de recettes */}
      <div className="recipe-grid">
        <div className="recipe-item">
          <img src={risottoImg} alt="Risotto Italien" className="recipe-image" />
          <p className="recipe-name text-normal-volkorn">Risotto Italien</p>
        </div>
        <div className="recipe-item">
          <img src={enchiladaImg} alt="Enchiladas Mexicaines" className="recipe-image" />
          <p className="recipe-name text-normal-volkorn">Enchiladas Mexicaines</p>
        </div>
        <div className="recipe-item">
          <img src={greekSaladImg} alt="Salade Grecque" className="recipe-image" />
          <p className="recipe-name text-normal-volkorn">Salade Grecque</p>
        </div>
      </div>
    </section>
  );
};

export default PopularRecipes;
