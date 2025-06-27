const express = require('express');
const router = express.Router();

router.get('/:userid', (req, res) => {
    res.send(`Fetching cart for user with id: ${req.params.userid}`);
});

router.post('/:userid', (req, res) => {
    res.send(`Adding product to cart for user with id: ${req.params.userid}`);
});


module.exports = router;