const express = require('express');
const router = express.Router();
const InventoryItem = require('../models/InventoryItem')

router.post('/', async (req, res) => {
    try {
        const { name, color, container_id, storage, purchase_source, purchase_year, number_of_tubers, condition } = req.body;
        const newItem = new InventoryItem({
            name,
            color,
            container_id,
            storage,
            purchase_source,
            purchase_year,
            number_of_tubers,
            condition,
        });

        const savedItem = await newItem.save()
        res.status(201).json(savedItem);
    } catch (error) {
        console.error('Error')
        res.status(500).json({ error: 'Failed to save item' });
    }
});

module.exports = router;