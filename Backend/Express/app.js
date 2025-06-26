const express = require('express');
const app = express();
const homeRouter = require('./routes/home');
const studentRouter = require('./routes/student');
const courseRouter = require('./routes/course');



app.use('/home', homeRouter);
app.use('/students', studentRouter);
app.use('/courses', courseRouter);
app.use((req, res, next) => {
    res.status(404).send('<h1>Error 404 - Page Not Found</h1>');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});