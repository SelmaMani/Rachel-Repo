const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 4000;

const EDAMAM_APP_ID = 'f0587eff'; // Replace with your Edamam app_id
const EDAMAM_APP_KEY = '0fc5e9fcd20cd82e74e4552e97af74e0'; // Given API Key from Edamam

// Endpoint to fetch recipes based on ingredients and dietary restrictions
app.get('/fetch-recipes/:ingredients/:diet?', async (req, res) => {
    const ingredientsParam = req.params.ingredients; // Get ingredients from URL
    const dietParam = req.params.diet ? req.params.diet.toLowerCase() : undefined; // Get diet if provided
    const ingredients = ingredientsParam.split(','); // Split into an array

    if (!ingredients || ingredients.length === 0) {
        return res.status(400).json({ error: 'Please provide valid ingredients.' });
    }

    const ingredientsString = ingredients.join(',');

    try {
        // Fetch recipes from Edamam API based on ingredients and dietary restrictions
        const response = await axios.get('https://api.edamam.com/api/recipes/v2', {
            params: {
                type: 'public',
                q: ingredientsString,
                app_id: EDAMAM_APP_ID,
                app_key: EDAMAM_APP_KEY,
                diet: dietParam
            }
        });

        // Check if there are recipes found
        if (response.data.hits.length === 0) {
            return res.status(404).send('No recipes found.');
        }

        // Send the list of recipes back to the frontend
        res.json(response.data.hits);
    } catch (error) {
        console.error('Error fetching recipes:', error.message);
        res.status(500).json({ error: 'Error fetching recipes from API.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
