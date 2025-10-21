// load environment variables
require('dotenv').config();

// server setup express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// setting up express and PORT
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());


// After your cors middleware:
app.options('/*', (req, res) => {
  res.sendStatus(204);
});


// Middleware
app.use(express.json());

// Mounted the Routes
const inventoryRoutes = require('./routes/inventory')
app.use('/inventory', inventoryRoutes);

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Atlas connected!'))
    .catch(err => console.error('Mongoose Error:', err));

// GET endpoint
app.get('/inventory', (req, res) => {
    res.json({ message: 'Inventory list here' })
});

// Listening on a PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});