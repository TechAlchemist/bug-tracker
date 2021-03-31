const express = require('express');
const router = express.Router();
const bugController = require('../controllers/open-bugs');

router.get('/', bugController.index);
// Single bug view to CLOSE a bug
router.get('/:id', bugController.bugDetails);
// Single bug view to EDIT a bug
router.get('/edit/:id', bugController.editBugDetails);
router.post('/createBug', bugController.newBug);




module.exports = router;