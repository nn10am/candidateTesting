const express = require('express');
const router = express.Router();

const essayController = require('../controllers/essay.controller');

// get all essay questions
router.get('/essay', essayController.getAllEssay);

// create new essay questions
router.post('/essay', essayController.createNewEssay);

// update essay question
router.put('/essay/:id', essayController.updateEssay);

// delete essay question
router.delete('/essay/:id', essayController.deleteEssay);

module.exports = router;