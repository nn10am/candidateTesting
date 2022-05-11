const express = require('express');
const router = express.Router();

const candidateController = require('../controllers/candidate.controller');

// get all candidates
router.get('/canlist', candidateController.getCandidateList);

// create new candidate
router.post('/newcan', candidateController.createNewCandidate);

// update candidate
router.put('/upcan', candidateController.updateCandidate);

// delete candidate
router.delete('/delcan', candidateController.deleteCandidate);

module.exports = router;