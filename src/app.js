const express = require('express');
const morgan = require('morgan');

const userRoute = require('./routes/Users');
const monitoriaRoute = require('./routes/Monitorias');
//const routes = require('./routes');

require('./database');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/users', userRoute);
app.use('/users', monitoriaRoute);

module.exports = app;