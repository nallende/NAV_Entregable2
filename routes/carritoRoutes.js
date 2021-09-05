const express = require('express');
const path = require('path');
const carritoController = require('../controllers/carritoController');

const router = express.Router();

router.all('/', (req, res, next) => {
    res.render();
});

router.get('/', carritoController.getAllProducts);

router.get('/producto/:id', carritoController.getProductDetail);

module.exports = router;