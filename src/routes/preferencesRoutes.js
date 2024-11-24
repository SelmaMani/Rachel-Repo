// routes/preferencesRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming your user model is in models/User.js

// Middleware to verify the user is logged in
const verifyUser = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'User not authenticated' });
  }
  next();
};

// Route to save preferences
router.post('/save-preferences', verifyUser, async (req, res) => {
  try {
    const { preferences } = req.body;
    const userEmail = req.session.user.email; // Assuming user info is stored in the session

    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Save preferences to the user's document
    user.foodPreferences = preferences;
    await user.save();

    return res.status(200).json({ message: 'Preferences saved successfully' });
  } catch (error) {
    console.error('Error saving preferences:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
