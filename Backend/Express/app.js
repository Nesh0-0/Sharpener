const express = require('express');
const app = express();
const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');


app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});