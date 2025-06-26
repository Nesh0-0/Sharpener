const express = require('express');
const app = express();



app.get('/products', (req, res) => {
    res.send('Here is a list of all products.');
});

app.post('/products', (req, res) => {
    res.send('A new product has been created.');
});

app.get('/categories', (req, res) => {
    res.send('Here is a list of all categories.');
});

app.post('/categories', (req, res) => {
    res.send('A new category has been added.');
});

app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});




app.listen(3000, () => {
  console.log('Server is running on port 3000');
});