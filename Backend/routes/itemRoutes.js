const express = require('express');
const { getAllItems, createItem } = require('../controllers/itemController');
const authMiddleware = require('../midelware/authMiddleware');
const router = express.Router();

router.get('/getAllItems', authMiddleware, getAllItems);
router.post('/createItem', authMiddleware, createItem);

module.exports = router;
