const Sequelize = require('sequelize');

const sequelize = new Sequelize('test_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

const auth = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been done successfully!');
    }
    catch (err) {
        console.log('Error! Could not connect to the database!');
    }
};

auth();

module.exports = sequelize;