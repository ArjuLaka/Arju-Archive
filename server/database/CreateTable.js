const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: 'drive_links'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }

    console.log('Connected to MySQL as ID ' + connection.threadId);

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS learning_module (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(100),
            format VARCHAR(100),
            source VARCHAR(512)
        )
    `;

    connection.query(createTableQuery, (err, results) => {
        if (err) {
            console.error('Error creating table:', err.stack);
            return;
        }

        console.log('Table created or already exists:', results);

        connection.end();
    });
});
