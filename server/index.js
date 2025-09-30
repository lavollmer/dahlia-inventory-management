//server directory and set up Express app

// server
const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');

const app = expres();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

//Connect to MongoDB