const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const helmet = require('helmet');
const path = require('path');

const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
//const adminRouter = require('./routes/adminRoutes');

//1) Middleware

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// 2) Rutas

//app.use('/api/admin', adminRouter);
app.use('/api/products', productRouter);
app.use('/api/user', userRouter);

app.use((req, res, next) => {
    res.status(404).send('pagina no encontrada');
});

module.exports = app;