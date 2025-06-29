const express = require('express');
const router = express.Router();
const busController = require('../controllers/busesController');

router.post('/', busController.addBus);
router.get('/available/:seats', busController.getBuses);


module.exports = router;