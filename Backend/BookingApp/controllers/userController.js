const users = require('../models/userModel');


const getAllUsers = async (req, res) => {
    try {
        const select = await users.findAll();
        res.status(200).json(select);

    }
    catch (err) {
        console.log(err);
        res.status(500).send('Could not fetch the users!');

    }
};

const addUser = async (req, res) => {
    try{
        const {name, mobile, address} = req.body;
        const addedUser = await users.create({
            name: name,
            mobile: mobile,
            address, address
        });
        console.log('Added User Successfully!');
        res.status(200).json(addedUser);

    }
    catch (err){
        console.log(err);
        res.status(500).send('Error uploading details!');

    }

};

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedUser = users.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json(deleteUser);

        
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Could not delete user!');

    }
}



module.exports = {
    getAllUsers,
    addUser,
    deleteUser
};