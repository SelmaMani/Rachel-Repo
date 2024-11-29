import React from 'react';
import '../App.css'; // En supposant que vous avez App.css pour les styles globaux

const PourquoiNousChoisir = () => {
  return (
    <section className="why-choose-us">
      <h2>Pourquoi Nous Choisir</h2>
      <div className="grid-container">
        <div className="grid-item">
          <h3>Suggestions Personnalisées</h3>
          <p>Avec les ingrédients disponibles, les préférences et le temps de cuisson.</p>
        </div>
        <div className="grid-item">
          <h3>Réduire le Gaspillage Alimentaire</h3>
          <p>Transformez les ingrédients restants en repas délicieux et évitez le gaspillage.</p>
        </div>
        <div className="grid-item">
          <h3>Simple et Facile</h3>
          <p>Simplifiez votre cuisine avec notre navigation facile.</p>
        </div>
        <div className="grid-item">
          <h3>Collection de Recettes Diversifiées</h3>
          <p>Explorez une large gamme de recettes provenant de diverses cuisines.</p>
        </div>
        <div className="grid-item">
          <h3>Flexibilité Alimentaire</h3>
          <p>Trouvez des recettes adaptées aux besoins végétaliens, sans gluten et autres besoins alimentaires.</p>
        </div>
        <div className="grid-item">
          <h3>Gagnez Plus de Temps</h3>
          <p>Trouvez des recettes adaptées à votre temps de cuisson sans avoir à réfléchir à nouveau.</p>
        </div>
      </div>
    </section>
  );
};

export default PourquoiNousChoisir;
