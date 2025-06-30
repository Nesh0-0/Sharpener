const express = require('express');
const router = express.Router();
const busesController = require('../controllers/busesController');
const buses = require('../models/Buses');


router.get('/available/:seats', busesController.getBusBySeats);
router.post('/', busesController.addBus);
router.get('/', busesController.getBuses);


module.exports = router;
