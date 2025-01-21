const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const path = require("path");
const connectDb = require('./config/connectDB');

// Configure .env
dotenv.config();

// Database call
connectDb();

// Initialize express app
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors()); 
// Routes
// User Registration Route (POST)
// app.post('/api/v1/users/register', async (req, res) => {
//   // console.log(req.body)
//   const { username, email, password } = req.body;

//   // if (!username || !email || !password) {
//   //   return res.status(400).json({ message: 'All fields are required' });
//   // }

  //   try {
//     // Registration logic, e.g., hashing password and saving to database
//     // Example: 
//     // const hashedPassword = await bcrypt.hash(password, 10);
//     // const newUser = new User({ username, email, password: hashedPassword });
//     // await newUser.save();
    
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);  // This will help capture server-side errors
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// User Routes
app.use("/api/v1/users", require("./routes/userRoute"));

// Transaction Routes
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

// Static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app.post("/register",(req,res)=>{
//   console.log(req.body)
// })

// Port
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
