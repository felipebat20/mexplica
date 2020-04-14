const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

require('./database');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(routes);

app.listen(3333);