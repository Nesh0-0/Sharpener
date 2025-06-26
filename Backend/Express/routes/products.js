const express = require('express');
const router = express.Router();




router.get('/', (req, res) => {
    res.send('Here is a list of all products.');
});

router.post('/', (req, res) => {
    res.send('A new product has been created.');
});

module.exports = router;