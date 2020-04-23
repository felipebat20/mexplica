import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import userRoute from './routes/Users';
import monitoriaRoute from './routes/Monitorias';
// const authRoute = require('./routes/Authentication');
//const routes = require('./routes');

import './database';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(cors());
    }
    routes() {
        this.app.use('/users', userRoute);
        this.app.use('/users', monitoriaRoute);
        // this.app.use('/', authRoute);
    }
}
export default new App().app;