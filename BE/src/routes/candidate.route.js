const express = require('express');
const router = express.Router();

const candidateController = require('../controllers/candidate.controller');

// get all candidates
router.get('/', candidateController.getCandidateList);

// create new candidate
router.post('/', candidateController.createNewCandidate);

// update candidate
router.put('/', candidateController.updateCandidate);

// delete candidate
router.delete('/', candidateController.deleteCandidate);

module.exports = router;