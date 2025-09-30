const InventoryItem = require('../models/InventoryItem')

const newItem = new InventoryItem({
    name: 'Dahlia Tuber - Cafe au Lait',
    quantity: 1,
    price: 0,
    category: 'Flowers',
})

newItem.save()
    .then(item => console.log('Item saved:', item))
    .catch(err => console.error('Save failed:', err))