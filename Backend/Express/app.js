const express = require('express');
const app = express();
const cartRouter = require('./routes/cart');
const productRouter = require('./routes/products');
const usersRouter = require('./routes/users');

app.use(express.static('public'));
app.use(express.json());

app.use('/cart', cartRouter);
app.use('/products', productRouter);
app.use('/users', usersRouter);
app.use((req, res, next) => {
    res.status(404).send('<h1>Error 404 - Page Not Found</h1>');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});