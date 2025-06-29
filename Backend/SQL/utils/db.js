const express = require('express');
const sql = require('mysql2');

const connection = sql.createConnection({
    host: 'Localhost',
    user: 'root',
    password: 'root',
    database: 'test_DB'
});

connection.connect((err) => {
    if (err) {
        console.log('Could not connet to the database. ERROR: ' + err);
        connection.end();
        return;
    }
    console.log('Connected to the database successfully.');
})

const createTable = `CREATE TABLE IF NOT EXISTS Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(225) NOT NULL,
    email VARCHAR(225) NOT NULL
)`;

connection.execute(createTable, (err) => {
    if (err) {
        console.log('Could not create table, ERROR: ' + err);
        connection.end();
        return;
    }
    console.log('Table created successfully!');
});

module.exports = connection;