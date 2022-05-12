const dbConn = require('../../config/db.config');
const McModel = require('../models/mc.model');

// get all mc questions
exports.getAllMc = (req, res) => {
    McModel.getAllMc((err, Mc) => {
        if (err)
            res.send(err);
        res.send(Mc);
    })
}
//get mc question by ID
exports.getMcByID = (req, res) => {
    McModel.getMcByID(req.params.id, (err, Mc) => {
        if (err)
            res.send(err);
        res.send(Mc)
    })
}
//get mc question by category
exports.getMcByID = (req, res) => {
    McModel.getMcByID(req.params.categoryID, (err, Mc) => {
        if (err)
            res.send(err);
        res.send(Mc)
    })
}

// create new multiple choice question
exports.createMc = (req, res) => {
    const McReqData = new McModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        McModel.createMc(McReqData, (err) => {
            res.json({ status: !err?.sqlMessage, message: err?.sqlMessage || 'Multiple choice question created successfully' })
        })
    }
}

// update multiple choice question by ID
exports.updateMc = (req, res) => {
    const McReqData = new McModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        McModel.updateMc(req.params.id, McReqData, (err) => {
            res.json({ status: !!err?.changedRows, message: err?.changedRows ? 'Multiple choice question updated successfully' : 'Updated false' })
        })
    }
}

// delete multiple choice question by ID
exports.deleteMc = (req, res) => {
    McModel.deleteMc(req.params.id, (err) => {
        res.json({ status: !!err?.affectedRows, message: err?.affectedRows ? 'Multiple choice question deleted successfully' : 'Deleted false' })
    })
}