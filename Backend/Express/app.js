const express = require('express');
const app = express();
const productRouter = require('./routes/products');

app.use(express.static('public'));
app.use(express.json());

app.use('/products', productRouter);
app.use((req, res, next) => {
    res.status(404).send('<h1>Error 404 - Page Not Found</h1>');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});