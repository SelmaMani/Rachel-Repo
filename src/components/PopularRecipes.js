import React from 'react';
import '../App.css';

const PopularRecipes = () => {
  return (
    <section className="popular-recipes">
      <h2>Popular Recipes</h2>
      <div className="recipe-categories">
        <button>Cuisines</button>
        <button>Dietary Preferences</button>
        <button>Meal Types</button>
        <button>Special Diets</button>
      </div>
      <div className="recipe-grid">
        <div className="recipe-item">
          <img src="risotto.jpg" alt="Italian Risotto" />
          <p>Italian Risotto</p>
        </div>
        <div className="recipe-item">
          <img src="enchilada.jpg" alt="Mexican Enchiladas" />
          <p>Mexican Enchiladas</p>
        </div>
        <div className="recipe-item">
          <img src="salad.jpg" alt="Greek Salad" />
          <p>Greek Salad</p>
        </div>
      </div>
    </section>
  );
};

export default PopularRecipes;
