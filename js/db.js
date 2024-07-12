const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1870325',
    database: 'MaisonNeuf'
});

db.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

module.exports = db;
