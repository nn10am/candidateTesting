const express = require('express');
const router = express.Router();

const essayController = require('../controllers/essay.controller');

// get all essay questions
router.get('/', essayController.getAllEssay);

// create new essay questions
router.post('/', essayController.createNewEssay);

// update essay question
router.put('/', essayController.updateEssay);

// delete essay question
router.delete('/', essayController.deleteEssay);

module.exports = router;