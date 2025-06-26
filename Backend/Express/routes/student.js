const express = require('express');
const router = express.Router();

let students = {1: "Nesh", 2: "Bharu", 3: "Hawk"};

router.get('/', (req, res) => {
    for (let id in students) {
        res.write(`${id} - ${students[id]}\n`);
    }
    res.end();
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    if (students[id]) {
        res.send(`${id} - ${students[id]}`);
    } else {
        res.status(404).send('Student not found');
    }
});

module.exports = router;

