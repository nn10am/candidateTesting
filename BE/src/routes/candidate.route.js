const express = require('express');
const router = express.Router();


const candidateController = require('../controllers/candidate.controller');

// Get all candidates
 
router.get('/api/candidate', candidateController.getCandidateList);

module.exports = router;