const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/config.env` });

const app = require('./app');

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log(' Se esta Conectado a BBDD ecomm!');
    });

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`App listening on port ${port}...`);
});