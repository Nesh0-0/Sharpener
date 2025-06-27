const addProductService = () => {
    return "Adding a new product";
}

const getAllProductsService = () => {
    return "Fetching all products";
}       

const getProductByIdService = (id) => {
    return `Fetching product with id: ${id}`;
}

module.exports = {
    addProductService,
    getAllProductsService,
    getProductByIdService
}