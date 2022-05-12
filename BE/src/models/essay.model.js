var dbConn = require('../../config/db.config');

var Essay = function (essay) {
    this.id = essay.id;
    this.categoryID = essay.categoryID;
    this.content = essay.content;
    this.adminID = essay.adminID;
}

// get all essay questions
Essay.getAllEssay = (result) => {
    dbConn.query('SELECT * FROM essay', async (err, res) => {
        if (err) {
            result(err);
        } else {
            await result(res);
        }
    })
}
// get essay question by ID
Essay.getEssayByID = (id, result) => {
    dbConn.query('SELECT * FROM essay where id=?', id, (err, res) => {
        if (err)
            result(err);
        result(result);
    })
}

// create new essay questions
Essay.createEssay = (essayReqData, result) => {
    dbConn.query('INSERT INTO essay SET ? ', essayReqData, (err, res) => {
        if (err) {
            console.log('Error while inserting data');
            result(err);
        } else {
            console.log('Essay question created successfully');
            result(res)
        }
    })
}

// update essay questions
Essay.updateEssay = (id, essayReqData, result) => {
    dbConn.query("UPDATE essay SET categoryID=?,content=?,adminID=? WHERE id = ?", [essayReqData.categoryID, essayReqData.content, essayReqData.adminID, id], (err, res) => {
        if (err) {
            console.log('Error while updating the essay question');
            result(err);
        } else {
            console.log("Essay question updated successfully");
            result(res);
        }
    });
}

// delete essay question
Essay.deleteEssay = (id, result) => {
    dbConn.query("DELETE FROM essay WHERE id= ?", [id], (err, res) => {
        if (err) {
            console.log('Error while deleting the essay question');
            result(err);
        } else {
            console.log("Essay question deleted successfully");
            result(res);
        }
    });
}

module.exports = Essay;