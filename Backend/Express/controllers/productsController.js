const path = require('path');
const errorHandling = require('../utils/response');

const getAllProducts = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'products.html'));  
};

const addProduct = (req, res) => {
   console.log(req.body);
   res.send('Success!');
};

const getProductById = (req, res) => {
    const productId = req.params.id;

    if (productId > 10) {
        return errorHandling.errorResponse(res, 404, {
            message: 'Product not found!'
        })
    }
    return errorHandling.successResponse(res, 200, {
        data:"Product exists for product Id: " + productId
    })
};

module.exports = {
    getAllProducts,
    addProduct,
    getProductById
};