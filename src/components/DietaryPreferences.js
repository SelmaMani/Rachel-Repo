import React, { useState } from "react";
import "../App.css"; // Assuming you have shared styles
import { useNavigate } from "react-router-dom";

const DietaryPreferences = () => {
  const preferences = {
    "Gluten-Related": [
      "All",
      "Wheat",
      "Barley",
      "Rye",
      "Oats",
      "Spelt",
      "Semolina",
      "Durum",
      "Farro",
      "Kamut",
      "Triticale",
      "Couscous",
      "Malt"
    ],
    "Dairy-Related": [
      "All",
      "Milk",
      "Cheese",
      "Yogurt",
      "Butter",
      "Cream",
      "Ice Cream",
      "Ghee",
      "Whey",
      "Casein",
      "Lactose"
    ],
    "Nut-Related": [
      "All",
      "Peanuts",
      "Almonds",
      "Walnuts",
      "Pistachios",
      "Hazelnuts",
      "Cashews",
      "Brazil Nuts",
      "Macadamia Nuts",
      "Pecans",
      "Pine Nuts",
      "Chestnuts"
    ],
    "Soy-Related": [
      "All",
      "Tofu",
      "Soy Sauce",
      "Miso",
      "Edamame",
      "Soy Milk",
      "Tempeh",
      "Soy Protein",
      "Soy Lecithin",
      "Soy Flour"
    ],
    "Egg-Related": [
      "All",
      "Whole Eggs",
      "Egg Whites",
      "Egg Yolks",
      "Mayonnaise",
      "Custards",
      "Quiche",
      "Baked Goods",
      "Egg Powders",
      "Aioli"
    ],
    "Seafood-Related": [
      "All",
      "Shellfish",
      "Shrimp",
      "Crab",
      "Lobster",
      "Oysters",
      "Mussels",
      "Clams",
      "Scallops",
      "Fish",
      "Salmon",
      "Tuna",
      "Cod",
      "Mackerel",
      "Anchovies",
      "Caviar",
      "Herring",
      "Tilapia",
      "Swordfish",
      "Sardines"
    ],
    "Meat-Related": [
      "All",
      "Pork",
      "Beef",
      "Chicken",
      "Lamb",
      "Turkey",
      "Game Meat",
      "Veal",
      "Duck",
      "Goat",
      "Rabbit",
      "Bison",
      "Venison",
      "Offal (e.g., Liver, Kidney)"
    ],
    "Legume-Related": [
      "All",
      "Lentils",
      "Chickpeas",
      "Black Beans",
      "Kidney Beans",
      "Navy Beans",
      "Pinto Beans",
      "Fava Beans",
      "Green Beans",
      "Peas",
      "Soybeans"
    ],
    "Fruit-Related": [
      "All",
      "Citrus Fruits",
      "Oranges",
      "Lemons",
      "Limes",
      "Grapefruit",
      "Apples",
      "Bananas",
      "Berries",
      "Strawberries",
      "Blueberries",
      "Raspberries",
      "Blackberries",
      "Mango",
      "Pineapple",
      "Peaches",
      "Cherries",
      "Grapes",
      "Melons",
      "Papaya",
      "Pomegranate"
    ],
    "Vegetable-Related": [
      "All",
      "Tomatoes",
      "Potatoes",
      "Spinach",
      "Kale",
      "Carrots",
      "Onions",
      "Garlic",
      "Bell Peppers",
      "Broccoli",
      "Cauliflower",
      "Cabbage",
      "Celery",
      "Mushrooms",
      "Zucchini",
      "Squash",
      "Eggplant",
      "Asparagus",
      "Beets",
      "Brussels Sprouts"
    ],
    "Seed-Related": [
      "All",
      "Sesame Seeds",
      "Sunflower Seeds",
      "Pumpkin Seeds",
      "Chia Seeds",
      "Flaxseeds",
      "Poppy Seeds",
      "Hemp Seeds",
      "Quinoa"
    ],
    "Beverage-Related": [
      "All",
      "Coffee",
      "Tea",
      "Juice",
      "Soft Drinks",
      "Alcohol",
      "Beer",
      "Wine",
      "Spirits",
      "Milk",
      "Plant-Based Milk (e.g., Almond, Soy, Oat)"
    ]  
  };

  const [selectedPreferences, setSelectedPreferences] = useState(
    Object.fromEntries(
      Object.keys(preferences).map((category) => [
        category,
        preferences[category].reduce(
          (acc, option) => ({
            ...acc,
            [option]: option === "All"
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

      if (option === "All") {
        // If "All" is selected, deselect all others
        Object.keys(newCategory).forEach((key) => {
          newCategory[key] = key === "All";
        });
      } else {
        // Deselect "All" and toggle the selected option
        newCategory.All = false;
        newCategory[option] = !newCategory[option];
      }

      return {
        ...prev,
        [category]: newCategory,
      };
    });
  };

  const handleProceed = () => {
    console.log("Selected Preferences:", selectedPreferences);
    navigate("/recipes");
  };

  return (
    <div className="dietary-preferences-page">
      <h1 className="title-big">Dietary Restrictions & Food Preferences</h1>
      <p className="text-normal">Before starting, what food <b>you can not eat</b> ?</p>

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

      <button className="proceed-button" onClick={handleProceed}>
        Proceed
      </button>
    </div>
  );
};

export default DietaryPreferences;
