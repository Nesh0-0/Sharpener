const productServices = require('../services/productServices');
const path = require('path');

const getAllProducts = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'products.html'));  
};

const addProduct = (req, res) => {
    res.send(productServices.addProductService());
};

const getProductById = (req, res) => {
    res.send(productServices.getProductByIdService(req.params.id)); 
};

module.exports = {
    getAllProducts,
    addProduct,
    getProductById
};