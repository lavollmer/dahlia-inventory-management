// load environment variables
require('dotenv').config();

// server setup express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// setting up express and PORT
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  process.env.VITE_API_URL,      // set this in Render (e.g. https://dahlia-petal-ledger.netlify.app)
  'http://localhost:5000'       // keep for local development if you test from CRA
];

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (e.g. server-to-server, mobile, curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error('CORS policy: origin not allowed: ' + origin));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Enable CORS for all routes
app.use(cors(corsOptions));

// Handle preflight requests safely
app.options("/*", cors(corsOptions));

// Middleware
app.use(express.json());

// Mounted the Routes
const inventoryRoutes = require('./routes/inventory')
app.use('/inventory', inventoryRoutes);
app.use('/inventory/', inventoryRoutes);


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