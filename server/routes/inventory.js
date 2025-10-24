const express = require('express');
const router = express.Router();
const InventoryItem = require('../models/InventoryItem')
const mongoose = require('mongoose')

// GET route
router.get('/', async (req, res) => {
    try {
        const inventory = await InventoryItem.find();
        res.json(inventory);
    } catch (err) {
        console.error("Error fetching inventory:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// GET route with id
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  const item = await InventoryItem.findById(id);

  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  res.json(item);
});

//SEARCH
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    const inventory = await InventoryItem.find({
      name: { $regex: query, $options: 'i' }
    });
    res.json(inventory);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});
// DELETE route
router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await InventoryItem.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' })
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Server error' })
    }
})

// EDIT route
router.put('/:id', async (req, res) => {
    try {
        console.log('Fetching inventory with ID:', req.params.id);
        const editedItem = await InventoryItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!editedItem) {
            return res.status(404).json({ message: 'Item not found' })
        }
        res.status(200).json(editedItem);
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Server error' })
    }
})

// POST route
router.post('/', async (req, res) => {
    try {
        const { name, color, bloom_size, variety, status, container_id, storage, purchase_source, purchase_year, number_of_tubers, condition } = req.body;

        // validation to avoid empty stuff
        if (!name || !color || !container_id) {
            return res.status(400).json({ error: 'Name, color or quantity are required.' })
        }

        const newItem = new InventoryItem({
            name,
            variety,
            bloom_size,
            color,
            status,
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