const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/get-users', userController.getAllUsers);
router.post('/', userController.addUser);
router.get('/', (req, res) => {
    res.sendFile("D:/Sharpener/Backend/BookingApp/public/views/index.html");
})
router.delete('/:id', userController.deleteUser);



module.exports = router;