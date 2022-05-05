const mysql = require('mysql');

// Create mysql connetion

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bGlobal_database'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Succesfully!!!!!');
})

module.exports = dbConn;
