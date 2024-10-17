const express = require('express');
const { getRecipes, addRecipe } = require('../controllers/recipeController');

const router = express.Router();

// Route to fetch recipes based on ingredients
router.get('/recipes', getRecipes);

// Route to add a new recipe
router.post('/recipes', addRecipe);

module.exports = router;
