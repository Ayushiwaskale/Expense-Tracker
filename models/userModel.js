const mongoose = require('mongoose');

// Schema design
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'name is required'],
        },
        email: {
            type: String,
            required: [true, 'email is required'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'password is required'],
        },
    },
    { timestamps: true }
);

// Export model
const userModel = mongoose.model('users', userSchema);
module.exports = userModel;
