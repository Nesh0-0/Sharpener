const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const expenses = sequelize.define('Expenses', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
    },
    category: {
        type: DataTypes.STRING
    }
});

module.exports = expenses;