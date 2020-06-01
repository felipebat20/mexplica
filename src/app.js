import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import userRoute from './routes/Users';
import monitoriaRoute from './routes/Monitorias';
import sessionRoute from './routes/Sessions';
import subjectRoute from './routes/Subjects';
import proposalRoute from './routes/Propostas';

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
        this.app.use(monitoriaRoute);
        this.app.use(sessionRoute);
        this.app.use(subjectRoute);
        this.app.use(proposalRoute);
    }
}
export default new App().app;