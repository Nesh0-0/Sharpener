const express = require('express');
const router = express.Router();
const expensesController = require('../controllers/expensesController');

router.get('/get-expenses', expensesController.displayAllExpenses);
router.post('/add-expense', expensesController.addExpense);
router.delete('/delete-expense/:id', expensesController.deleteExpense);


module.exports = router;