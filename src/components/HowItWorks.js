import React from 'react';
import '../App.css';
import ingredientsImg from '../assets/ingredients.png'; 
import generateImg from '../assets/generate.png';
import recipeImg from '../assets/recipe.png';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="title-big">Comment Ça Marche</h2>
      <div className="steps">
        <div className="step">
          <img src={ingredientsImg} alt="Ingrédients Disponibles" className="step-image" />
          <p className="step-title text-normal-volkorn">Ingrédients Disponibles</p>
        </div>
        <div className="step">
          <img src={recipeImg} alt="Préférences Alimentaires" className="step-image" />
          <p className="step-title text-normal-volkorn">Préférences Alimentaires</p>
        </div>
        <div className="step">
          <img src={generateImg} alt="Recettes Générées par l'IA" className="step-image" />
          <p className="step-title text-normal-volkorn">Recettes Générées par l'IA</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
