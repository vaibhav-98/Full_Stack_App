const express = require('express');
const { getAllItems, createItem } = require('../controllers/itemController');
const authMiddleware = require('../midelware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getAllItems);
router.post('/', authMiddleware, createItem);

module.exports = router;
