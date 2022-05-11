var dbConn = require('../../config/db.config');

var MultipelChoice = function (Mc) {
    this.id = Mc.id;
    this.categoryID = Mc.categoryID;
    this.content = Mc.content;
    this.choice1 = Mc.choice1;
    this.choice2 = Mc.choice2;
    this.choice3 = Mc.choice3;
    this.answer = Mc.answer;
    this.adminID = Mc.adminID;
    this.status = Mc.status ? Mc.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
}


// get all mc questions
MultipelChoice.getAllMc = (result) => {
    dbConn.query('SELECT * FROM multiplechoice', (err, res) => {
        if (err) {
            console.log('Error while fetching multiple choice questions', Mc);
            result(null, err);
        } else {
            console.log('Multiple choice questions fetched successfully');
            result(null, res);
        }
    });
}
// create new mc questions
MultipelChoice.createMc = (McReqData, result) => {
    dbConn.query('INSERT INTO multiplechoice SET ? ', McReqData, (err, res) => {
        if (err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log('Multiple choice question created successfully');
            result(null, res);
        }
    });
}
// update mc questions
MultipelChoice.updateMc = (id, McReqData, result) => {
    dbConn.query("UPDATE multiplechoice SET categoryID=?,content=?,choice1=?,choice2=?,choice3=?,answer=?,adminID=? WHERE id = ?", [McReqData.categoryID, McReqData.content, McReqData.choice1, McReqData.choice2, McReqData.choice3, McReqData.answer, McReqData.adminID, id], (err, res) => {
        if (err) {
            console.log('Error while updating the multiple choice question');
            result(null, err);
        } else {
            console.log("Multiple choice question updated successfully");
            result(null, res);
        }
    });
}
// delete mc question
MultipelChoice.deleteMc = (id, result) => {
    dbConn.query("UPDATE multiplechoice SET is_deleted=? WHERE id = ?", [1, id], (err, res) => {
        if (err) {
            console.log('Error while deleting the multiple choice question');
            result(null, err);
        } else {
            console.log("Multiple choice question deleted successfully");
            result(null, res);
        }
    });
}
module.exports = MultipelChoice;