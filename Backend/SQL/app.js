const express = require('express');
const app = express();
const db = require('./utils/db');
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');

app.use(express.json());
app.use('/users', userRoutes);
app.use('/buses', busRoutes);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});