const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Fetching all users');
});

router.post('/', (req, res) => {
    res.send('Adding a new user');
});

router.get('/:id', (req, res) => {
    res.send(`Fetching user with Id: ${req.params.id}`);
});

module.exports = router;