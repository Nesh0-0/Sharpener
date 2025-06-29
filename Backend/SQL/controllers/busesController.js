const db = require('../utils/db');


const addBus = (req, res) => {
    const { bus_number, total_seats, seats_available } = req.body;
    const insertQuery = `INSERT INTO Buses(bus_number, total_seats, seats_available) VALUES('${bus_number}', ${total_seats}, ${seats_available})`;
    db.execute(insertQuery, (err) => {
        if (err) {
            console.error('Error inserting bus: ' + err);
            res.status(500).send('Error inserting bus');
            db.end();
            return;
        }
        res.status(200).send('Bus added successfully!');
    });
}


const getBuses = (req, res) => {
    const { seats } = req.params;
    console.log(seats);
    const selectQuery = `SELECT * from Buses WHERE seats_available >= ${seats}`;
    db.execute(selectQuery, (err, result) => {
        if (err) {
            console.error("Error fetching buses: " + err);
            res.status(500).send('Error fetching buses!');
            return;
        }
        res.status(200).json(result);
    });
}

module.exports = {
    addBus,
    getBuses
};