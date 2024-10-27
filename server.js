const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); 

const userRoutes = require('./routes/userRoutes.js'); 

const app = express();

// Middleware
app.use(cors()); 
app.use(bodyParser.json()); 

// Routes
app.use('/api', userRoutes); 

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Content Security Policy (CSP)
app.use(function(req, res, next) {
    res.setHeader('Content-Security-Policy', "script-src 'self' 'unsafe-inline' http://localhost:5173 https://reactjs.org/link/react-devtools");
    next();
});

// Start server
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});