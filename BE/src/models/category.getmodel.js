var dbConn = require('../../config/db.config');

var Category = function (Cat) {
    this.id = Cat.id;
    this.categoryName = Cat.categoryName;
    this.status = Cat.status ? Cat.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
}

// get all categories
Category.getAllCat = (result) => {
    dbConn.query('SELECT * FROM category ', (err, res) => {
        if (err) {
            console.log('Error while fetching categories', err);
            result(null, err);
        } else {
            console.log('Categories fetched successfully');
            result(null, res);
        }
    })
}
module.exports = Category;