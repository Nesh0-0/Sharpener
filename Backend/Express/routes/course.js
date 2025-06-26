const express = require('express');
const router = express.Router();

let courses = {1: "Math", 2: "Science", 3: "History"};

router.get('/', (req, res) => {
    for (id in courses) {
        res.write(`${id} - ${courses[id]}\n`);
    };
    res.end();
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    if (courses[id]) {
        res.send(`${id} - ${courses[id]}`);
    }
    else {
        res.status(404).send(`Course Not Found!`);
    }
});

module.exports = router;