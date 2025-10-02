const mongoose = require('mongoose');

//Schema
const InventoryItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    color: {
        type: String,
        required: true,
    },
    container_id: {
        type: Number,
        required: true,
    },
    storage: {
        type: String,
        default: 'Uncategorized',
        required: true,
    },
    purchase_source: {
        type: String,
        required: true,
    },
    purchase_year: {
        type: Date,
        default: Date.now,
    },
    numbers_of_tubers: {
        type: Number,
        required: true,
    },
    condition: {
        type: String,
        required: true,
    }}, {timestamps: true});

module.exports = mongoose.model('InventoryItem', InventoryItemSchema)