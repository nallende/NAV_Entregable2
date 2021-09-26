const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    price: {
        type: Number,
        required: [true, 'Todos los Productos deben tener un Precio'],
    },
    title: {
        type: String,
        required: [true, 'Todos los Productos deben tener un Nombre'],
        unique: true,
    },
    thumbnail: {
        type: String,
        required: [true, 'Todos los Productos deben tener un Nombre'],
    },
});

module.exports = mongoose.model('Product', productSchema);