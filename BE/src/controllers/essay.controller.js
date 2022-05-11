const EssayModel = require('../models/essay.model');

// get all essay questions
exports.getAllEssay = (req, res) => {
    EssayModel.getAllEssay((err, essay) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('Essay', essay);
        res.send(essay)
    })
}


// create new essay question
exports.createNewEssay = (req, res) => {
    const essayReqData = new EssayModel(req.body);
    console.log('essayReqData', essayReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        EssayModel.createEssay(essayReqData, (err, essay) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Essay question created successfully', data: essay.insertId })
        })
    }
}

// update essay question
exports.updateEssay = (req, res) => {
    const essayReqData = new EssayModel(req.body);
    console.log('essayReqData update', essayReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        EssayModel.updateEssay(req.params.id, essayReqData, (err, essay) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Essay question updated successfully' })
        })
    }
}

// delete essay question
exports.deleteEssay = (req, res) => {
    EssayModel.deleteEssay(req.params.id, (err, essay) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'Essay question deleted successully!' });
    })
}