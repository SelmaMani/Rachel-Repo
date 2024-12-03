import React, { useState } from "react";
import "../App.css"; // En supposant que vous avez des styles partagés
import { useNavigate } from "react-router-dom";

const DietaryPreferences = () => {
  const preferences = {
    "Lié au Gluten": [
      "Tous",
      "Blé",
      "Orge",
      "Seigle",
      "Avoine",
      "Épeautre",
      "Semoule",
      "Blé dur",
      "Farro",
      "Kamut",
      "Triticale",
      "Couscous",
      "Malt"
    ],
    "Lié aux Produits Laitiers": [
      "Tous",
      "Lait",
      "Fromage",
      "Yaourt",
      "Beurre",
      "Crème",
      "Glace",
      "Ghee",
      "Petit-lait",
      "Caséine",
      "Lactose"
    ],
    "Lié aux Noix": [
      "Tous",
      "Cacahuètes",
      "Amandes",
      "Noix",
      "Pistaches",
      "Noisettes",
      "Noix de cajou",
      "Noix du Brésil",
      "Noix de macadamia",
      "Pécans",
      "Pignons de pin",
      "Châtaignes"
    ],
    "Lié au Soja": [
      "Tous",
      "Tofu",
      "Sauce soja",
      "Miso",
      "Edamame",
      "Lait de soja",
      "Tempeh",
      "Protéine de soja",
      "Lécithine de soja",
      "Farine de soja"
    ],
    "Lié aux Œufs": [
      "Tous",
      "Œufs entiers",
      "Blancs d'œufs",
      "Jaunes d'œufs",
      "Mayonnaise",
      "Crèmes dessert",
      "Quiche",
      "Produits de boulangerie",
      "Poudres d'œufs",
      "Aïoli"
    ],
    "Lié aux Fruits de Mer": [
      "Tous",
      "Crustacés",
      "Crevettes",
      "Crabe",
      "Homard",
      "Huîtres",
      "Moules",
      "Palourdes",
      "Coquilles Saint-Jacques",
      "Poisson",
      "Saumon",
      "Thon",
      "Cabillaud",
      "Maquereau",
      "Anchois",
      "Caviar",
      "Hareng",
      "Tilapia",
      "Espadon",
      "Sardines"
    ],
    "Lié à la Viande": [
      "Tous",
      "Porc",
      "Bœuf",
      "Poulet",
      "Agneau",
      "Dinde",
      "Gibier",
      "Veau",
      "Canard",
      "Chèvre",
      "Lapin",
      "Bison",
      "Venaison",
      "Abats (ex : Foie, Reins)"
    ],
    "Lié aux Légumineuses": [
      "Tous",
      "Lentilles",
      "Pois chiches",
      "Haricots noirs",
      "Haricots rouges",
      "Haricots blancs",
      "Haricots pinto",
      "Fèves",
      "Haricots verts",
      "Pois",
      "Soja"
    ],
    "Lié aux Fruits": [
      "Tous",
      "Agrumes",
      "Oranges",
      "Citrons",
      "Citrons verts",
      "Pamplemousse",
      "Pommes",
      "Bananes",
      "Baies",
      "Fraises",
      "Myrtilles",
      "Framboises",
      "Mûres",
      "Mangue",
      "Ananas",
      "Pêches",
      "Cerises",
      "Raisins",
      "Melons",
      "Papaye",
      "Grenade"
    ],
    "Lié aux Légumes": [
      "Tous",
      "Tomates",
      "Pommes de terre",
      "Épinards",
      "Chou frisé",
      "Carottes",
      "Oignons",
      "Ail",
      "Poivrons",
      "Brocoli",
      "Chou-fleur",
      "Chou",
      "Céleri",
      "Champignons",
      "Courgettes",
      "Courges",
      "Aubergines",
      "Asperges",
      "Betteraves",
      "Choux de Bruxelles"
    ],
    "Lié aux Graines": [
      "Tous",
      "Graines de sésame",
      "Graines de tournesol",
      "Graines de citrouille",
      "Graines de chia",
      "Graines de lin",
      "Graines de pavot",
      "Graines de chanvre",
      "Quinoa"
    ],
    "Lié aux Boissons": [
      "Tous",
      "Café",
      "Thé",
      "Jus",
      "Boissons gazeuses",
      "Alcool",
      "Bière",
      "Vin",
      "Spiritueux",
      "Lait",
      "Lait végétal (ex : Amande, Soja, Avoine)"
    ]
  };

  const [selectedPreferences, setSelectedPreferences] = useState(
    Object.fromEntries(
      Object.keys(preferences).map((category) => [
        category,
        preferences[category].reduce(
          (acc, option) => ({
            ...acc,
            [option]: option === "Tous"
          }),
          {}
        )
      ])
    )
  );

  const navigate = useNavigate();

  const togglePreference = (category, option) => {
    setSelectedPreferences((prev) => {
      const newCategory = { ...prev[category] };

      if (option === "Tous") {
        Object.keys(newCategory).forEach((key) => {
          newCategory[key] = key === "Tous";
        });
      } else {
        newCategory.Tous = false;
        newCategory[option] = !newCategory[option];
      }

      return {
        ...prev,
        [category]: newCategory,
      };
    });
  };

  const handleProceed = async () => {
    console.log("Selected preferences:", selectedPreferences);

    try {
        // Send preferences to the backend
        const response = await fetch('http://localhost:5000/api/save-preferences', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ preferences: selectedPreferences }),
            credentials: 'include', // Ensures cookies are sent with the request
        });

        // Log the raw response text
        const textResponse = await response.text();
        console.log("Response text:", textResponse);

        const data = JSON.parse(textResponse);

        if (response.ok) {
            console.log("Preferences saved successfully!");
            navigate("/recettes");
        } else {
            alert("Error saving preferences: " + data.error);
        }
    } catch (error) {
        console.error("Error saving preferences:", error);
        alert("An error occurred.");
    }
};

  

  return (
    <div className="dietary-preferences-page">
      <h1 className="title-big">Restrictions Alimentaires et Préférences</h1>
      <p className="text-normal">
        Avant de commencer, quels aliments <b>ne pouvez-vous pas manger</b> ?
      </p>

      <div className="preferences-container">
        {Object.entries(preferences).map(([category, options]) => (
          <div key={category} className="preference-category">
            <span className="category-title title-medium">{category}</span>
            <div className="options-container">
              {options.map((option) => (
                <button
                  key={option}
                  className={`preference-option text-normal-volkorn ${
                    selectedPreferences[category]?.[option] ? "selected" : ""
                  }`}
                  onClick={() => togglePreference(category, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="proceed-button text-normal-volkorn" onClick={handleProceed}>
        Continuer
      </button>
    </div>
  );
};

export default DietaryPreferences;
