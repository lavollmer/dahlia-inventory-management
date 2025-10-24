// load environment variables
require('dotenv').config();

// server setup express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// setting up express and PORT
const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "https://dahlia-petal-ledger.netlify.app",
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // enable preflight for all routes

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
app.get('/', (req, res) => {
    res.json({ message: 'Inventory list here' })
});

// Listening on a PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});