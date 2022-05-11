const McModel = require('../models/category.getmodel');

// get all mc questions
exports.getAllCat = (req, res) => {
    console.log('here all categories');
    McModel.getAllMc((err, Mc) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('Multiple choice', Mc);
        res.send(Mc)
    })
}