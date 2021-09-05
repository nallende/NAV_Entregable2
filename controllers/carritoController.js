const Product = require('../models/producto');

exports.getAllProducts = (req, res, next) => {
    const products = Product.findAll();
    console.log(products);
    res.render();
};

exports.getProductDetail = (req, res, next) => {
    const products = Product.findById(req.params.prodId);
    res.render('product-detail', {
        prod: products[0],
        pageTitle: 'Product Detail',
        path: '/',
        name: 'Edward',
    });
};