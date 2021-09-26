const mongoose = require('mongoose');

const Schema = mongoose.Schema;

import { productSchema } from './models/productModel.js';

const cartSchema = new Schema({
    products: [productSchema],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', cartSchema);