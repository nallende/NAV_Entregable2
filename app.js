const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const app = express();
const helmet = require('helmet');
const path = require('path');

const productRouter = require('./routes/productRoutes');
const carritoRouter = require('./routes/carritoRoutes');
const adminRouter = require('./routes/adminRoutes');

//1) Middleware

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res, next) => {
    res.render('index.ejs');
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