const expenses = require('../models/expenseModel');

const displayAllExpenses = async (req, res) => {
    try {
        const allExpenses = await expenses.findAll();
        res.status(200).json(allExpenses);

    }
    catch (err) {
        res.status(500).json({error: `err`});
    }

};

const addExpense = async (req, res) => {
    try {
        const expense = req.body;
        // console.log(expense);
        const newExpense = await expenses.create(expense);
        console.log(newExpense);
        res.status(201).json(newExpense);
    }
    catch (err) {
        res.status(500).json({error: `${err}`});
    }
};

const deleteExpense = async (req, res) => {
    try {
        const {id} = req.params;
        // const expenseToDelete = await expenses.findByPk(id);
        const removeExpense = await expenses.destroy({
            where: {
                id: id
            }
        });
        // console.log(removeExpense);
        res.status(200).json(removeExpense);
    }
    catch (err) {
        res.status(500).send({error : `${err}`});
    }
};

module.exports = {
    displayAllExpenses,
    addExpense,
    deleteExpense
};