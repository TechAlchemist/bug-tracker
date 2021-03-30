const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projects');

router.get('/', projectController.index);
router.post('/createProject', projectController.newProject);

module.exports = router;