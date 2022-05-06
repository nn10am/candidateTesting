const express = require('express');
const router = express.Router();

const candidateController = require('../controllers/candidate.controller');

// get all candidates
router.get('/canlist', candidateController.getCandidateList);

// create new candidate
router.post('/newcan', candidateController.createNewCandidate);

// update candidate
router.put('/updatecan', candidateController.updateCandidate);

// delete candidate
router.delete('/deletecan', candidateController.deleteCandidate);

module.exports = router;