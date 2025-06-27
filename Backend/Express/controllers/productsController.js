const getAllProducts = (req, res) => {
    res.send('Fetching all products');
    
};

const addProduct = (req, res) => {
    res.send('Addidng a new product');
   
}

const getProductById = (req, res) => {
    res.send(`Fetching product with id: ${req.params.id}`);
};

module.exports = {
    getAllProducts,
    addProduct,
    getProductById
};