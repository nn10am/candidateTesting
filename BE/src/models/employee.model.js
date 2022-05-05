var dbConn = require('../../config/db.config');

var Employee = function (employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.code = employee.code;
    this.phoneNumber = employee.phoneNumber;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
}

// get all employees
Employee.getAllEmployees = (result) => {
    dbConn.query('SELECT * FROM Candidates WHERE is_deleted=0', (err, res) => {
        if (err) {
            console.log('Error while fetching employess', err);
            result(null, err);
        } else {
            console.log('Employees fetched successfully');
            result(null, res);
        }
    })
}