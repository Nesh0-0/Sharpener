const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db');

const buses = sequelize.define('Buses', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    totalSeats:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    availableSeats:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = buses;