const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: 'drive_links',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const getAllLearningModule = () => {
    return new Promise((resolve, reject) => {
        const selectQuery = 'SELECT * FROM learning_module';

        pool.query(selectQuery, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

module.exports = {
    getAllLearningModule
};