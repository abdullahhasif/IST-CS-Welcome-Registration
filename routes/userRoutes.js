const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

router.post('/register', async (req, res) => {
    try {
        const newRegistration = new Registration(req.body);
        await newRegistration.save();
        res.status(201).json({ message: 'Registration successful', data: newRegistration });
    } catch (error) {
        console.error('Error saving registration:', error);

        // Handle duplicate registration number error
        if (error.code === 11000) { // Duplicate key error
            res.status(409).json({ error: 'A registration with this registration number already exists.' });
        } else {
            res.status(500).json({ error: 'Registration failed. Please try again.' });
        }
    }
});

module.exports = router;
