const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD
});

// Connect to the MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }

    console.log('Connected to MySQL as ID ' + connection.threadId);

    // Create a new database
    const createDatabaseQuery = 'CREATE DATABASE IF NOT EXISTS drive_links';
    connection.query(createDatabaseQuery, (err, results) => {
        if (err) {
            console.error('Error creating database:', err.stack);
            return;
        }

        console.log('Database created or already exists:', results);
        
        connection.end();
    });
});
