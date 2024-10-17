import React from 'react';
import '../App.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <img src="ingredient.jpg" alt="Ingredients" />
          <p>Available Ingredients</p>
        </div>
        <div className="step">
          <img src="preference.jpg" alt="Preferences" />
          <p>Food Preferences</p>
        </div>
        <div className="step">
          <img src="ai-recipe.jpg" alt="AI Recipes" />
          <p>AI Generated Recipes</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
