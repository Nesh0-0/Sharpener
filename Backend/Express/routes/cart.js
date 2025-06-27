const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/:userid', cartController.displayCart);
router.post('/:userid', cartController.addToCart);
  


module.exports = router;