const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

router.get('/', productController.displayProducts);

router.post('/', productController.addProduct);

router.get('/:id', productController.getProductById);

module.exports = router;

