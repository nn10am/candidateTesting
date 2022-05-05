const CandidateModel = require('../models/candidate.model');

// get all candidate list
exports.getCandidateList = (req, res) => {
    //console.log('here all candidate list');
    CandidateModel.getAllCandidate((err, candidate) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('Candidates', candidates);
        res.send(candidates)
    })
}


// create new candidate
exports.createNewCandidate = (req, res) => {
    const candidateReqData = new CandidateModel(req.body);
    console.log('candidateReqData', candidateReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        CandidateModel.createCandidate(candidateReqData, (err, candidate) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'candidate Created Successfully', data: candidate.insertId })
        })
    }
}

// update candidate
exports.updateCandidate = (req, res) => {
    const candidateReqData = new CandidateModel(req.body);
    console.log('candidateReqData update', candidateReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        CandidateModel.updateCandidate(req.params.id, candidateReqData, (err, candidate) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'candidate updated Successfully' })
        })
    }
}

// delete candidate
exports.deleteCandidate = (req, res) => {
    EmployeeModel.deleteCandidate(req.params.id, (err, candidate) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'candidate deleted successully!' });
    })
}