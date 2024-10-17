const Recipe = require('../models/Recipe');

// Get recipes based on ingredients
const getRecipes = async (req, res) => {
    try {
        const { ingredients } = req.query;

        // Convert ingredients to an array
        const ingredientList = ingredients.split(',');

        // Find recipes that contain any of the provided ingredients
        const recipes = await Recipe.find({ ingredients: { $in: ingredientList } });

        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipes' });
    }
};

// Add a new recipe
const addRecipe = async (req, res) => {
    try {
        const { name, ingredients, cookingTime, details, dietaryRestrictions, cuisineType, rating } = req.body;

        const newRecipe = new Recipe({
            name,
            ingredients,
            cookingTime,
            details,
            dietaryRestrictions,
            cuisineType,
            rating
        });

        await newRecipe.save();

        res.status(201).json({ message: 'Recipe added successfully', recipe: newRecipe });
    } catch (error) {
        res.status(500).json({ message: 'Error adding recipe' });
    }
};

module.exports = {
    getRecipes,
    addRecipe
};
