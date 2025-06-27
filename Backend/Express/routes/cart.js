const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/:userid', cartController.getCartForUser);
router.post('/:userid', cartController.addProductToCart);
  


module.exports = router;