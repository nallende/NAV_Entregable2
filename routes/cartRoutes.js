const express = require('express');
const path = require('path');
const cartController = require('../controllers/cartController');

const router = express.Router();

router.all('/', (req, res, next) => {
    res.render();
});

router.get('/cart', cartController.getCart);

router.get('/cart/:id', cartController.getCartDetail);

router
    .route('/cart:id')
    .patch(cartController.updateCart)
    .delete(cartController.deletePCart);

module.exports = router;