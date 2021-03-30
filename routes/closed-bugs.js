const express = require('express');
const router = express.Router();
const bugController = require('../controllers/closed-bugs');

router.get('/', bugController.index);
router.post('/createCloseBug', bugController.newCloseBug);

module.exports = router;