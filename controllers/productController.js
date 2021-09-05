const fs = require('fs');
const app = require('../app');
const products = JSON.parse(
    fs.readFileSync(`${__dirname}/../models/data/products-simple.json`)
);

exports.getAllProducts = (req, res) => {
    res.status(200).json({
        status: 'succes',
        requestedAt: req.requestTime,
        results: products.length,
        data: { products: products },
    });
};

exports.checkID = (req, res, next, val) => {
    let index = val.id;
    if (req.params.id * 1 > products.length) {
        return res.status(404).json({
            satus: 'fail',
            message: 'ID No existe',
        });
    }
    next();
};

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            satus: 'fail',
            message: 'No lleva nombre ni Precio',
        });
    }
    next();
};

exports.getProduct = (req, res) => {
    console.log(req.params);

    const id = req.params.id * 1;

    const product = products.find((el) => el.id === id);

    res.status(200).json({
        status: 'succes',
        data: { product },
    });
};

exports.createProduct = (req, res) => {
    const newId = products[products.length - 1].id + 1;
    const newproduct = Object.assign({ id: newId }, req.body);

    products.push(newproduct);
    fs.writeFile(
        `${__dirname}/models/data/products-simple.json`,
        JSON.stringify(products),
        (err) => {
            res.status(201).json({
                staus: 'success',
                data: {
                    product: newproduct,
                },
            });
        }
    );
};

exports.updateProduct = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            product: '<Updated product here....>',
        },
    });
};

exports.deleteProduct = (req, res) => {
    const productIndex = checkID.index(req.params.id);

    if (productIndex === -1) return res.status(404).json({});

    products.splice(productIndex, 1);
    res.json(products);
};