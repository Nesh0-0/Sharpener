
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

const auth = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
auth();

module.exports = sequelize;

























// const express = require('express');
// const sql = require('mysql2');

// const connection = sql.createConnection({
//     host: 'Localhost',
//     user: 'root',
//     password: 'root',
//     database: 'test_DB'
// });

// connection.connect((err) => {
//     if (err) {
//         console.log('Could not connet to the database. ERROR: ' + err);
//         connection.end();
//         return;
//     }
//     console.log('Connected to the database successfully.');
// })

// const createStudentsTable = `CREATE TABLE IF NOT EXISTS Students(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(225) NOT NULL,
//     email VARCHAR(225) NOT NULL,
//     age INT NOT NULL
// )`;

// connection.execute(createStudentsTable, (err) => {
//     if (err) {
//         console.log('Could not create table, ERROR: ' + err);
//         connection.end();
//         return;
//     }
//     console.log('Created Students table successfully!');
// });


// module.exports = connection;