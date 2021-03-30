const express = require('express');
const router = express.Router();
const bugController = require('../controllers/open-bugs');

router.get('/', bugController.index);
router.post('/createBug', bugController.newBug);

module.exports = router;