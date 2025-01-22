const Item = require('../models/itemModel');
exports.getAllItems = async (req, res) => {
    try {
        console.log('User ID:', req.user.id); // Debug log
        const items = await Item.find({ user: req.user.id });
        console.log('Fetched Items:', items); // Debug log
        res.json(items);
    } catch (error) {
        console.error('Error fetching items:', error); // Debug log
        res.status(500).json({ message: 'Error fetching items', error });
    }
};

 exports.createItem = async (req, res) => {
    try {
        const { name, description } = req.body;

        // Validation
        if (!name || !description) {
            return res.status(400).json({ message: 'Name and description are required' });
        }

        // Example: Save the item to the database
        const newItem = { name, description }; // Replace with your database model logic
        console.log('Item created:', newItem);

        res.status(201).json({ message: 'Item created successfully', item: newItem });
    } catch (error) {
        res.status(500).json({ message: 'Error creating item', error });
    }
};



