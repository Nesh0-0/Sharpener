const { get } = require('../routes/studentRoutes');
const db = require('../utils/db');
const student = require('../models/Students');

const addStudent = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const insert = await student.create( {
            'name': name,
            'email': email
        });
        res.status(201).send('Student inserted successfully');
    }
    catch (err) {
        console.log('Error inserting student! ' + err);
        res.send(500).send('Error inserting student!');
    }

};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteStudent = await student.destroy({
            where: {
                id: id
            }
        });

        if (!deleteStudent) {
            console.log('No such student exist!');
            res.status(500).send('No such student found!');
            return
        }
        res.status(200).send('Student details deleted successfully!');
    }
    catch (err) {
        console.log('Error deleteing student details!' + err);
        res.status(500).send('Error deleting student details!');
    }
};


const updateStudent = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, email} = req.body;
        console.log(id, name, email);
        if (!name) {
            res.status(400).send('Name is required');
            return; 
        }
        if (!email) {
            res.status(400).send('Email is required');
            return; 
        }
        const studentDetails = await student.findByPk(id);
        if (!student) {
            console.log('No such student found!')
            res.status(500).send('Student with the given id does not exist!');
            return;
        }
        console.log("success");
        studentDetails.save();
        res.status(200).send('Student details updated successfully!');
        
    }
    catch (err) {
        console.log('Error updating student details!' + err);
        res.status(500).send('Error updating student details!');
    }
}



const getAllStudents = async (req, res) => {
    try {
        const selectStudents = await student.findAll();
        if (!selectStudents) {
            res.status(500).send('No students found!');
            return;
        }
        res.status(200).json(selectStudents);
    }
    catch (err) {
        console.log('Error fetching students!' + err);
        res.send(500).send('Error fetching students!');
    }

}

const getStudentById = async (req, res) => {
    try {
        const {id} = req.params;
        const studentDetails = await student.findByPk(id);

        if (!studentDetails) {
            res.status(500).send('Student with the given id does not exist!');
            return;
        }
        res.status(200).json(studentDetails);

    }
    catch (err) {
        console.log('Error finding student!' + err);
        res.send(500).send('Error finding student!');
    }
};




module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent

};