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
}


// get all mc questions
MultipelChoice.getAllMc = (result) => {
    dbConn.query('SELECT * FROM multiplechoice', (err, res) => {
        if (err) {
            console.log('Error while fetching multiple choice questions', Mc);
            result(err);
        } else {
            console.log('Multiple choice questions fetched successfully');
            result(res);
        }
    });
}
// get mc questions by ID
MultipelChoice.getMcByID = (id, result) => {
    dbConn.query('SELECT * FROM multiplechoice where id=?', id, (err, res) => {
        if (err)
            result(err);
        result(res);
    })
}
// create new mc questions
MultipelChoice.createMc = (McReqData, result) => {
    dbConn.query('INSERT INTO multiplechoice SET ? ', McReqData, (err, res) => {
        if (err) {
            console.log('Error while inserting data');
            result(err);
        } else {
            console.log('Multiple choice question created successfully');
            result(res);
        }
    });
}

// update mc questions
MultipelChoice.updateMc = (id, McReqData, result) => {
    console.log(id, McReqData, result)
    dbConn.query("UPDATE multiplechoice SET categoryID=?,content=?,choice1=?,choice2=?,choice3=?,answer=?,adminID=? WHERE id = ?", [McReqData.categoryID, McReqData.content, McReqData.choice1, McReqData.choice2, McReqData.choice3, McReqData.answer, McReqData.adminID, id], (err, res) => {
        if (err) {
            console.log('Error while updating the multiple choice question');
            result(err);
        } else {
            console.log("Multiple choice question updated successfully");
            result(res);
        }
    });
}

// delete mc question
MultipelChoice.deleteMc = (id, result) => {
    dbConn.query("DELETE FROM multiplechoice WHERE id= ?", [id], (err, res) => {
        if (err) {
            console.log('Error while deleting the multiple choice question');
            result(err);
        } else {
            console.log("Multiple choice question deleted successfully");
            result(res);
        }
    });
}
module.exports = MultipelChoice;