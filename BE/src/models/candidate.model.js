var dbConn = require('../../config/db.config');

var Candidate = function (candidate) {
    this.id = candidate.id;
    this.name = candidate.name;
    this.code = candidate.code;
    this.phoneNumber = candidate.phoneNumber;
    this.status = candidate.status ? candidate.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
}

// get all candidates
Candidate.getAllCandidates = (result) => {
    dbConn.query('SELECT * FROM candidates WHERE is_deleted=0', (err, res) => {
        if (err) {
            console.log('Error while fetching candidate', err);
            result(null, err);
        } else {
            console.log('Candidates fetched successfully');
            result(null, res);
        }
    })
}


// create new candidate
Candidate.createCandidate = (candidateReqData, result) => {
    dbConn.query('INSERT INTO candidates SET ? ', candidateReqData, (err, res) => {
        if (err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log('Candidate created successfully');
            result(null, res)
        }
    })
}

// update candidate
Candidate.updateCandidate = (id, candidateReqData, result) => {
    dbConn.query("UPDATE candidates SET name=?,code=?,phoneNumber=? WHERE id = ?", [candidateReqData.name, candidateReqData.code, candidateReqData.phoneNumber, id], (err, res) => {
        if (err) {
            console.log('Error while updating the candidate');
            result(null, err);
        } else {
            console.log("Candidate updated successfully");
            result(null, res);
        }
    });
}

// delete candidate
Candidate.deleteCandidate = (id, result) => {
    dbConn.query("UPDATE candidates SET is_deleted=? WHERE id = ?", [1, id], (err, res) => {
        if (err) {
            console.log('Error while deleting the candidate');
            result(null, err);
        } else {
            console.log("Candidate deleted successfully");
            result(null, res);
        }
    });
}

module.exports = Candidate;