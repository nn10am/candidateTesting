const McModel = require('../models/mc.model');

// get all mc questions
exports.getAllMc = (req, res) => {
    McModel.getAllMc((err) => {
        res.send(err)
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

// update multiple choice question
exports.updateMc = (req, res) => {
    const McReqData = new McModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        McModel.updateMc(req.params.id, McReqData, (err) => {
            res.json({ status: !!err?.changedRows, message: err?.changedRows ? 'Multiple choice question updated successfully' : 'updated false' })
        })
    }
}

// delete multiple choice question
exports.deleteMc = (req, res) => {
    McModel.deleteMc(req.params.id, (err) => {
        console.log("err", err)
        res.json({ status: !!err?.affectedRows, message: err?.affectedRows ? 'Multiple choice question deleted successfully' : 'Deleted false' })
    })
}