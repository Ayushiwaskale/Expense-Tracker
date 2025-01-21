const mongoose = require('mongoose'); // Correct the typo here
const colors = require("colors");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Server is running on ${mongoose.connection.host}`.bgCyan.white); // Template string corrected
    } catch (error) {
        console.error(`${error}`.bgRed); // Template string corrected
    }
};

module.exports = connectDB;
