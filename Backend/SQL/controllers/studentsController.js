const { get } = require('../routes/studentRoutes');
const db = require('../utils/db');

const addStudent = (req, res) => {
    const { name, email, age } = req.body;
    const insertQuery = `INSERT INTO Students(name, email, age) VALUES('${name}', '${email}', ${age})`;
    db.execute(insertQuery, (err) => {
        if (err) {
            console.error(`Error inserting student ${name}:`, err);
            res.status(500).send(`Error inserting student ${name}`);
            db.close();
            return;
        }
        res.status(201).send('Student inserted successfully');


    });

}

const deleteStudent = (req, res) => {
    const { id } = req.params;
    const deleteQuery = `DELETE FROM Students WHERE id = ${id}`;
    db.execute(deleteQuery, (err) => {
        if (err) {
            console.log('Error deleting student:', err);
            res.status(500).send('No such student found!');
            return;
        }
        res.status(200).send('Student deleted successfully!');
    });
};


const updateStudent = (req, res) => {
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
    const updateQuery = `UPDATE Students SET name = '${name}', email = '${email}' WHERE id = ${id}`;
    db.execute(updateQuery,[name, email] ,(err, result) => {
        if (err) {
            console.log('Error updating student:', err);
            res.status(500).send('Error updating student');
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send('No such student found!');
            return;
        }
        // console.log('User updated successfully!');
        res.status(200).send('Student name and email updated successfully!');
    })

}



const getAllStudents = (req, res) => {
    const selectQuery = `SELECT * FROM Students`;
    db.execute(selectQuery, (err, result) => {
        console.log('Result:', result);
        res.status(200).json(result);
    });

}

const getStudentById = (req, res) => {
    const {id} = req.params;
    const selectQuery = `SELECT * FROM Students WHERE id = ${id}`;
    db.execute(selectQuery, (err, result) => {
        if (err) {
            console.error(`Error fetching student with ID ${id}:`, err);
            res.status(500).send(`Error fetching student with ID ${id}`);
            return;
        }
        if (result.length === 0) {
            res.status(404).send('No such student found!');
            return;
        }
        res.status(200).json(result);
    });
};




module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent

};