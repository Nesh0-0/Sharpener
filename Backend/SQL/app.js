const express = require('express');
const app = express();
const db = require('./utils/db');
const studentRoutes = require('./routes/studentRoutes');
const studentModel = require('./models/Students');

app.use(express.json());
app.use('/students', studentRoutes);

db.sync().then(() => {

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((err) => {
    console.log(err);
});


