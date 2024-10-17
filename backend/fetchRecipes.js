const axios = require('axios');

// Replace this with your Spoonacular API key
const SPOONACULAR_API_KEY = '23a7bcbc7632490a9d0cbdd754f79fcc'; 

// Function to fetch recipes based on ingredients
const fetchRecipes = async (ingredients) => {
    const ingredientsString = ingredients.join(','); // Join the ingredients into a string

    try {
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsString}&apiKey=${SPOONACULAR_API_KEY}`
        );

        console.log('Recipes found:', response.data); // Log the recipes to the console
    } catch (error) {
        console.error('Error fetching recipes:', error.message);
    }
};

// Replace this array with your desired ingredients
const ingredients = ['eggs', 'chacken','milk', 'rice', 'broccoli'];

// Call the function with your ingredients
fetchRecipes(ingredients);
