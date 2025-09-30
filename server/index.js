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
mongoose.connect('mongodb://localhost:5173/dahlia_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then (() => console.log('MongoDB connected!'))
.catch(err => console.error(err));


app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})