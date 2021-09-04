const express = require('express');
const fs = require('fs');
const app = express();
const morgan = require('morgan');

const productRouter = require('./routes/productRoutes');
const cartRouter = require('./routes/cartRoutes');
const userRouter = require('./routes/userRoutes');
//const { validateUser } = require('./controllers/productController');

//1) Middleware
app.use(express.json());
if (process.env.NODE_ENV !== 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    console.log('Middleware funcionando');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// 3) Rutas

app.use('/api/admin/products', productRouter);
//app.use('/api/v1/carts', cartRouter);
//app.use('/api/v1/users', userRouter);

app.use((req, res, next) => {
    res.status(404).send('Pagina No Encontrada');
});

app.use((err, res, next) => {
    res.status(500).send('Tenemos un Problema');
});

module.exports = app;