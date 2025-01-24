const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');
const cors = require('cors');

dotenv.config();
connectDB();
const app = express();

// Other middleware and routes
app.use(express.json());

// Configure CORS
app.use(cors({
    origin: 'http://localhost:3000', // Replace with the origin of your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], // Add required headers
}));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
