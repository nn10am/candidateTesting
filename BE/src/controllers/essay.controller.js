const EssayModel = require('../models/essay.model');


// get all essay questions
exports.getAllEssay = (req, res) => {
    EssayModel.getAllEssay((err, essay) => {
        if (err)
            res.send(err);
        res.send(essay);
    })
}
// get essay question by ID
exports.getEssayByID = (req, res) => {
    EssayModel.getEssayByID(req.params.id, (err, essay) => {
        if (err)
            res.send(err);
        res.send(essay)
    })
}


// create new essay question
exports.createNewEssay = (req, res) => {
    const essayReqData = new EssayModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        EssayModel.createEssay(essayReqData, (err) => {
            res.json({ status: !err?.sqlMessage, message: err?.sqlMessage || 'Essay question created successfully!' })
        })
    }
}

// update essay question
exports.updateEssay = (req, res) => {
    const essayReqData = new EssayModel(req.body);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        EssayModel.updateEssay(req.params.id, essayReqData, (err) => {
            res.json({ status: !!err?.changedRows, message: err?.changedRows ? 'Essay question updated successfully!' : 'Updated false' })
        })
    }
}

// delete essay question
exports.deleteEssay = (req, res) => {
    EssayModel.deleteEssay(req.params.id, (err, essay) => {
        res.json({ status: !!err?.affectedRows, message: err?.affectedRows ? 'Essay question deleted successully!' : 'Deleted false' })
    })
}