const mongoose = require('mongoose');

//Schema
const InventoryItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    quantitiy: {
        type: Number,
        required: true,
        min: 0,
    },
    price: {
        type: Number,
        required: false,
        min: 0,
    },
    category: {
        type: String,
        default: 'Uncategorized',
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('InventoryItem', InventoryItemSchema)