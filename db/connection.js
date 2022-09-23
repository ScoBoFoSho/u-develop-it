const mysql = require('mysql2');
require('dotenv').config()

// Connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQL username,
        user: 'root',
        // your mySQL password,
        password: process.env.DB_PASSWORD,
        database: 'election'
    },
    console.log('Connected to the election database!')
);

module.exports = db;

