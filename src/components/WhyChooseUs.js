import React from 'react';
import '../App.css'; // Assuming you have App.css for global styles

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="grid-container">
        <div className="grid-item">
          <h3>Personalized Suggestions</h3>
          <p>With available ingredients, preferences, and cooking time.</p>
        </div>
        <div className="grid-item">
          <h3>Reduce Food Waste</h3>
          <p>Turn leftover ingredients into delicious meals and avoid waste.</p>
        </div>
        <div className="grid-item">
          <h3>Simple and Easy</h3>
          <p>Simplify your cooking with our easy navigation.</p>
        </div>
        <div className="grid-item">
          <h3>Diverse Recipe Collection</h3>
          <p>Explore a wide range of recipes from various cuisines.</p>
        </div>
        <div className="grid-item">
          <h3>Dietary Flexibility</h3>
          <p>Find recipes for vegan, gluten-free, and other dietary needs.</p>
        </div>
        <div className="grid-item">
          <h3>Save More Time</h3>
          <p>Find recipes tailored to your cooking time without rethinking.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
