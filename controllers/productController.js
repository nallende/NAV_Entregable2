const Product = require('../models/productModel');

exports.getAllProducts = async(req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            status: 'succes',
            results: products.length,
            data: { product: products },
        });
    } catch (err) {
        res.status(404).json({ status: fail, message: err });
    }
};

exports.getProduct = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json({
            status: 'succes',
            data: { product },
        });
    } catch (err) {
        res.status(404).json({ status: fail, message: err });
    }
};

exports.createProduct = async(req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json({
            staus: 'success',
            data: {
                product: newProduct,
            },
        });
    } catch (err) {
        res.status(400).json({
            stauts: 'fail',
            message: 'Producto Invalido',
        });
    }
};

exports.updateProduct = async(req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: 'success',
            data: {
                product: product,
            },
        });
    } catch (err) {
        res.status(404).json({ status: 'fail', message: err });
    }
};

exports.deleteProduct = async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'success',
            alert: 'Producto ha sido Eliminado',
        });
    } catch (err) {
        res.status(404).json({ status: 'fail', message: err });
    }
};