var dbConn = require('../../config/db.config');

var Essay = function (essay) {
    this.id = essay.id;
    this.categoryID = essay.categoryID;
    this.content = essay.content;
    this.adminID = essay.adminID;
    this.status = essay.status ? essay.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
}

// get all essay questions
Essay.getAllEssay = (result) => {
    dbConn.query('SELECT * FROM essay WHERE is_deleted=0', (err, res) => {
        if (err) {
            console.log('Error while fetching essay questions', err);
            result(null, err);
        } else {
            console.log('Essay questions fetched successfully');
            result(null, res);
        }
    })
}


// create new essay questions
Essay.createEssay = (essayReqData, result) => {
    dbConn.query('INSERT INTO essay SET ? ', essayReqData, (err, res) => {
        if (err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log('Essay question created successfully');
            result(null, res)
        }
    })
}

// update essay questions
Essay.updateEssay = (id, essayReqData, result) => {
    dbConn.query("UPDATE essay SET categoryID=?,content=?,adminID=? WHERE id = ?", [essayReqData.categoryID, essayReqData.content, essayReqData.adminID, id], (err, res) => {
        if (err) {
            console.log('Error while updating the essay question');
            result(null, err);
        } else {
            console.log("Essay question updated successfully");
            result(null, res);
        }
    });
}

// delete essay question
Essay.deleteEssay = (id, result) => {
    dbConn.query("UPDATE essay SET is_deleted=? WHERE id = ?", [1, id], (err, res) => {
        if (err) {
            console.log('Error while deleting the essay question');
            result(null, err);
        } else {
            console.log("Essay question deleted successfully");
            result(null, res);
        }
    });
}

module.exports = Essay;