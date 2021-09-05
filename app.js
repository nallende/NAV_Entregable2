const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

const productRouter = require('./routes/productRoutes');
const carritoRouter = require('./routes/carritoRoutes');
const adminRouter = require('./routes/adminRoutes');

//app.set();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

//1) Middleware

app.use((req, res, next) => {
    console.log('Middleware funcionando');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// 3) Rutas
app.use('/api/admin', adminRouter);
app.use('/api/admin/products', productRouter);
app.use('/api/carritoRouter', carritoRouter);

app.use((req, res, next) => {
    res.status(404).send('pagina no encontrada');
});

module.exports = app;