const express = require('express');
const router = express.Router();


const McController = require('../controllers/mc.controller');

// get all mc questions
router.get('/multi-choice', McController.getAllMc);

// get mc questions by ID
router.get('/multi-choice/:id', McController.getMcByID);

// create new mc questions
router.post('/multi-choice', McController.createMc);

// update mc question
router.put('/multi-choice/:id', McController.updateMc);

// delete mc question
router.delete('/multi-choice/:id', McController.deleteMc);

module.exports = router;