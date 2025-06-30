const { Op } = require('sequelize');
const buses = require('../models/Buses');

const getBusBySeats = async (req, res) => {
    try {
        const {seats} = req.params;
        console.log(seats);
        const selectedBuses = await buses.findAll({
            where: {
                availableSeats: {
                    [Op.gt]: seats
                }
                
            }
            
        });
        if (!selectedBuses) {
            res.status(500).send('No buses available!');
            return;
        }
        res.status(200).json(selectedBuses);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Error fetching buses with the specfied available seats!');
    }
};

const getBuses = async (req, res) => {
    try{
        const select = await buses.findAll();
        
        if (!select) {
            res.status(400).send('No buses available at the moment!');
            return;
        }
        res.status(200).json(select);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Unable to fetch buses!');
    }
};

const addBus = async (req, res) => {
    try {
        const {totalSeats, availableSeats} = req.body;
        const addedBuses = buses.create({
            'availableSeats': availableSeats,
            'totalSeats' : totalSeats
        });
        if (!addedBuses) {
            console.log('Unable to add bus!');
            res.status(500).send('Unable to add bus!');
            return;
        }
        res.status(200).send('Bus added successfully!');
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Error adding bus!');
    }
};

module.exports = {
    addBus,
    getBuses,
    getBusBySeats
};