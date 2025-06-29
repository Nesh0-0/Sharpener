const db = require('../utils/db');

const insertUser = (req, res) => {
    const { name, email } = req.body;
    const insertQuery = `INSERT INTO Users(name, email) VALUES('${name}', '${email}')`;
    db.execute(insertQuery, (err) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send('Error inserting user');
            db.close();
            return;
        }
        res.status(201).send('User inserted successfully');


    });

}

const deleteUser = (req, res) => {
    const { id } = req.params;
    const deleteQuery = `DELETE FROM Users WHERE id = ${id}`;
    db.execute(deleteQuery, (err) => {
        if (err) {
            console.log('Error deleting user:', err);
            res.status(500).send('No such user found!');
            return;
        }
        res.status(200).send('User deleted successfully!');
    })
}


const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name) {
        res.status(400).send('Name is required');
        return; 
    }
    if (!email) {
        res.status(400).send('Email is required');
        return; 
    }
    const updateQuery = `UPDATE Users SET name = '${name}', email = '${email}' WHERE id = ${id}`;
    db.execute(updateQuery,[name, email] ,(err, result) => {
        if (err) {
            console.log('Error updating user:', err);
            res.status(500).send('Error updating user');
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send('No such user found!');
            return;
        }
        // console.log('User updated successfully!');
        res.status(200).send('User updated successfully!');
    })

}



const getAllUsers = (req, res) => {
    const selectQuery = `SELECT * FROM Users`;
    db.execute(selectQuery, (err, result) => {
        console.log('Result:', result);
        res.status(200).json(result);
    });

}




module.exports = {
    insertUser,
    deleteUser,
    updateUser,
    getAllUsers
};