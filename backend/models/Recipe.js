const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: [{
        type: String,
        required: true,
    }],
    cookingTime: {
        type: Number,
        required: true,
    },
    details: {
        type: String,
    },
    dietaryRestrictions: [{
        type: String,
    }],
    cuisineType: {
        type: String,
    },
    rating: {
        type: Number,
        default: 0,
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
