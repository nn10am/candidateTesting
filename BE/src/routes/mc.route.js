const express = require('express');
const router = express.Router();

const McController = require('../controllers/mc.controller');

// get all mc questions
router.get('/', McController.getAllMc);

// create new mc questions
router.post('/', McController.createNewMC);

// update mc question
router.put('/', McController.updateMc);

// delete mc question
router.delete('/', McController.deleteMc);

module.exports = router;