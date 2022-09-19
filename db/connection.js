const mysql = require('mysql2');

// Connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQL username,
        user: 'root',
        // your mySQL password,
        password: '!ManiPedi4Life!',
        database: 'election'
    },
    console.log('Connected to the election database!')
);

module.exports = db;