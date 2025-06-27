const displayCart = (req, res) => {
    res.send(`Fetching cart for user with id: ${req.params.userid}`);
};

const addToCart = (req, res)=> {
    res.send(`Adding product to cart for user with id: ${req.params.userid}`);
};

module.exports = {
    displayCart,
    addToCart
};