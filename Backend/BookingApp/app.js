const express = require('express');
const app = express();
const db = require('./utils/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.static('./public'));
app.use('/users', userRoutes);


db.sync().then(() => {

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((err) => {
    console.log(err);
});