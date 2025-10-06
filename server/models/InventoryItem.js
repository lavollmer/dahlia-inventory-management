const mongoose = require('mongoose');

//Schema
const InventoryItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    variety: {
        type: String,
        required: false,
    },
    color: {
        type: String,
        required: false,
    },
    bloom_size: {
        type: Number,
        required: false,
    },
    status: {
        type: String,
        required: false,
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
    number_of_tubers: {
        type: Number,
        required: false,
    },
    condition: {
        type: String,
        required: true,
    }}, {timestamps: true});

module.exports = mongoose.model('InventoryItem', InventoryItemSchema)