const Item = require('../models/itemModel');

exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find({ user: req.user.id });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
};

exports.createItem = async (req, res) => {
    const { title, description } = req.body;
    try {
        const item = await Item.create({ title, description, user: req.user.id });
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ message: 'Error creating item', error });
        
    }
};
