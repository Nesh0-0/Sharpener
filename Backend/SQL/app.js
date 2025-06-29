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

const createUsers = `CREATE TABLE IF NOT EXISTS Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT null,
    email VARCHAR(50))`;

const createBuses = `CREATE TABLE IF NOT EXISTS Buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    bus_number VARCHAR(20) NOT null,
    bus_capacity INT NOT null,
    availableSeats INT NOT null
)`;

const createBookings = `CREATE TABLE IF NOT EXISTS Bookings(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT NOT null)`;

const createPayments = `CREATE TABLE IF NOT EXISTS Payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid INT NOT null,
    paymentStatus TEXT NOT null
)`;

connection.execute(createUsers, (err) => {
    if (err) {
        console.log('Error: ', err);
        connection.close();
        return;
    }
    console.log('Users table created successfully');
})

connection.execute(createBuses, (err) => {
    if (err){
        console.log('Error: ', err);
        connection.close();
        return;
    }
    console.log('Buses table created successfully');
})

connection.execute(createBookings, (err) => {
    if (err){
        console.log('Error: ', err);
        connection.close();
        return;
    }
    console.log('Bookings table created successfully');
})

connection.execute(createPayments, (err) => {
    if (err){
        console.log('Error: ', err);
        connection.close();
        return;
    }
    console.log('Payments table created successfully');
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});