const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true 
    },
    registrationNo: { 
        type: String,
        required: true,
        unique: true // Ensure registrationNo is unique
    },
    department: { 
        type: String,
        required: true 
    },
    batch: { 
        type: String,
        required: true 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Export model
module.exports = mongoose.model('Registration', registrationSchema);
