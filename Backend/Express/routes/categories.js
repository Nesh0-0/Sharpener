const express = require('express');
const router = express.Router(); 



router.get('/', (req, res) => {
    res.send('Here is a list of all categories.');
});

router.post('/', (req, res) => {
    res.send('A new category has been added.');
});

module.exports = router;