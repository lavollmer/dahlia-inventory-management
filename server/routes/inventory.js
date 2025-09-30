const express = require('express');
const router = express.Router();
const InventoryItem = require('../models/InventoryItem')

router.post('/', async (req, res) => {
    try {
        const { name, quantity, price, category } = req.body;
        const newItem = new InventoryItem({
            name,
            quantity,
            price,
            category,
        });

        const savedItem = await newItem.save()
        res.status(201).json(savedItem);
    } catch(error) {
        console.error('Error')
        res.status(500).json({error: 'Failed to save item'});
    }
});

module.exports = router;