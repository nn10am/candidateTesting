const McModel = require('../models/mc.model');

// get all mc questions
exports.getAllMc = (req, res) => {
    console.log('here all mc list');
    McModel.getAllMc((err, Mc) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('Multiple choice', Mc);
        res.send(Mc)
    })
}


// create new multiple choice question
exports.createNewMc = (req, res) => {
    console.log('req data', req.body);
    // const McReqData = new McModel(req.body);
    // console.log('McReqData', McReqData);
    // // check null
    // if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    //     res.send(400).send({ success: false, message: 'Please fill all fields' });
    // } else {
    //     McModel.createMc(McReqData, (err, Mc) => {
    //         if (err)
    //             res.send(err);
    //         res.json({ status: true, message: 'Multiple choice question created successfully', data: Mc.insertId })
    //     })
    // }
}

// update multiple choice question
exports.updateMc = (req, res) => {
    const McReqData = new McModel(req.body);
    console.log('McReqData update', McReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        EssayModel.updateCandidate(req.params.id, McReqData, (err, Mc) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Nultiple choice question updated successfully' })
        })
    }
}

// delete multiple choice question
exports.deleteMc = (req, res) => {
    McModel.deleteMc(req.params.id, (err, Mc) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'Multiple choice question deleted successully!' });
    })
}