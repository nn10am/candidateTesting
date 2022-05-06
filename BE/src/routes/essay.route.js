const express = require('express');
const router = express.Router();

const essayController = require('../controllers/essay.controller');

// get all essay questions
router.get('/essaylist', essayController.getAllEssay);

// create new essay questions
router.post('/newessay', essayController.createNewEssay);

// update essay question
router.put('/upessay', essayController.updateEssay);

// delete essay question
router.delete('/deless', essayController.deleteEssay);

module.exports = router;