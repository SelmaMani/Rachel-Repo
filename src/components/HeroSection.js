import React from 'react';
import '../App.css'; // Ensure you import the App.css file

const HeroSection = () => {
  return (
    <div className="hero">
      <h1 className="title-big">Find Delicious Recipes with What You Have at Home</h1>
      <p className="title-normal">Let us find for you the best recipees you can get with
      only what you have available at home</p>
    <button class="start title-medium">Get Your Recipe</button>
    </div>
  );
};

export default HeroSection;
