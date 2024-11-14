// Import required modules
const express = require('express');          // Web framework for handling HTTP requests
const mongoose = require('mongoose');      // MongoDB object modeling library
const bodyParser = require('body-parser');  // Middleware for parsing JSON request bodies
const cors = require('cors');               // Middleware for enabling Cross-Origin Resource Sharing
require('dotenv').config();                 // Load environment variables from a .env file
const bcrypt = require('bcrypt');           // Library for hashing passwords

const app = express();                      // Initialize Express app

// Middleware setup
app.use(cors());                            // Enable CORS for all routes
app.use(bodyParser.json());                 // Parse incoming JSON payloads

// Serve static files from the "public" directory
app.use(express.static('public'));

// MongoDB connection using environment variable
mongoose.connect(process.env.MONGO_URI + '/user_data', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => console.log('Connected to MongoDB')) // Log success on successful connection
    .catch((error) => console.error('Error connecting to MongoDB:', error)); // Log any connection error

// Define Mongoose schema for user data
const userSchema = new mongoose.Schema({
    firstName: String,   // User's first name
    lastName: String,    // User's last name
    email: String,       // User's email address
    username: String,    // User's username
    password: String,    // User's password (hashed)
});

// Create a Mongoose model based on the user schema
const User = mongoose.model('User', userSchema);

// Handle user registration
app.post('/api/register', async (req, res) => {
    const { firstName, lastName, email, username, password } = req.body; // Destructure request body

    try {
        // Hash the password before storing it
        const saltRounds = 10;  // Define number of salt rounds for bcrypt
        const hashedPassword = await bcrypt.hash(password, saltRounds);  // Hash password

        // Create a new user with hashed password
        const newUser = new User({ firstName, lastName, email, username, password: hashedPassword });

        // Save the new user to the database
        await newUser.save();
        
        // Respond with a success message
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        // Handle any errors that occur during registration
        res.status(500).json({ error: 'An error occurred while registering the user.' });
    }
});

// Set the port to use either from the environment or default to 3000
const port = process.env.PORT || 3000;

// Start the server and listen for incoming requests
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log the server startup message
});
