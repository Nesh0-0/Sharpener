const {Sequelize, DataTypes} = require( 'sequelize');
const sequelize = require('../utils/db');

const Student = sequelize.define('Students', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true  
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = Student;