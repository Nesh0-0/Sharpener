const express = require('express');
const app = express();
const db = require('./utils/db');
const expenseRoutes = require('./routes/expensesRoutes');
const cors = require('cors');


app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile('D:/Sharpener/Backend/ExpenseTrackerWithDB/public/index.html');
})
app.use(express.json());
app.use('/expenses', expenseRoutes);


db.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running!');
    })

}).catch((err) => {
    console.log('Error! Could not start the server ' + err);
})


