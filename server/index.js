// load environment variables
require('dotenv').config();


// server setup express
const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware enables cors
app.use(cors());
app.use(express.json());

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then (() => console.log('MongoDB Atlas connected!'))
.catch(err => console.error(err));

// GET endpoint
app.get('/', (req, res) => {
    res.send('Hello!')
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});