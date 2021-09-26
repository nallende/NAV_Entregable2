const Product = require('../models/productModel');

exports.addToCart = (req, res, next) => {
    try {} catch (err) {
        console.log(err);
    }
};

exports.getCart = (req, res, next) => {
    try {} catch (err) {
        console.log(err);
    }
};

exports.deleteInCart = (req, res, next) => {
    req.user.removeFromCart(req.body.prodId);

    try {} catch (err) {
        console.log(err);
    }
};

exports.getProductDetail = (req, res, next) => {
    const products = Product.findById(req.params.prodId);
};