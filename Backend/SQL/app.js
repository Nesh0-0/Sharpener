const express = require('express');
const sql = require('mysql2');
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome!');
})

const connection = sql.createConnection({
    host: 'Localhost',
    user: 'root',
    password: 'root',
    database: 'test_DB'
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to the database: ', err);
        return;
    }
    console.log('Connected to the database');
});

const query = `CREATE TABLE Test(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT null,
    age INT NOT null)`;

connection.execute(query, (err) => {
    if (err) {
        console.log('Error: ', err);
        connection.end();
        return;
    }
    console.log('Table created successfully');
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});