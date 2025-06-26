const express = require('express');
const app = express();

app.use("/welcome", (req, res, next) => {
    console.log('Middleware executed');
    req.user = 'Guest';
    next();
});

app.get('/welcome', (req, res) => {
    res.send(`<h1>Welcome, ${req.user}</h1>`);
});




app.listen(3000, () => {
  console.log('Server is running on port 3000');
});