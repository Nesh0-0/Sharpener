const productServices = require('../services/productServices');

const getAllProducts = (req, res) => {
    res.send(productServices.getAllProductsService());  
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