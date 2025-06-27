const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Fetching all products');
});

router.post('/', (req, res) => {
    res.send('Addidng a new product');

});

router.get('/:id', (req, res) => {
    res.send(`Fetching product with id: ${req.params.id}`);
});

module.exports = router;

