const express = require('express');
const router = express.Router();
const InventoryItem = require('../models/InventoryItem')

// GET route
router.get('/', async (req, res) => {
    try {
        const inventory = await InventoryItem.find();
        res.json(inventory);
    } catch (err) {
        console.error("Error fetching inventory:", err);
        res.status(500). json({ error: "Server error"});
    }
});


// POST route
router.post('/', async (req, res) => {
    try {
        const { name, color, container_id, storage, purchase_source, purchase_year, number_of_tubers, condition } = req.body;
        
        // validation to avoid empty stuff
        if (!name || !color || !container_id){
            return res.status(400).json({error: 'Name, color or quantity are required.'})
        }
        
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
    } catch (err) {
        console.error('Error:', err)
        res.status(500).json({ error: 'Failed to save item' });
    }
});

module.exports = router;