import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import userRoutes from './Routes/UserRoutes.js';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Online Doctor Appointment API');
});

// Connect to the database
connectDB();

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
