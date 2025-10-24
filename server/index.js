// Load environment variables
require('dotenv').config();

// Server setup
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Allowed origins for CORS
const allowedOrigins = [
  process.env.VITE_API_URL,  // e.g., https://dahlia-petal-ledger.netlify.app
  'http://localhost:5000'    // local dev
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // server-to-server or curl
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error('CORS policy: origin not allowed: ' + origin));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
const inventoryRoutes = require('./routes/inventory');
app.use('/inventory', inventoryRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Inventory list here' });
});

// 404 catch-all
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Atlas connected!'))
  .catch(err => console.error('Mongoose Error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
