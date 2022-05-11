const express = require('express');
const router = express.Router();


const McController = require('../controllers/mc.controller');

// get all mc questions
router.get('/mclist', McController.getAllMc);

// create new mc questions
// router.post('/newmc', McController.createMc);

// update mc question
router.put('/upmc', McController.updateMc);

// delete mc question
router.delete('/delmc', McController.deleteMc);

module.exports = router;