import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';
//middleware de autorização
import authMiddleware from '../middlewares/auth';

const routes = new Router();

import UserController from '../controllers/UserController';

routes.post('/', UserController.store);
routes.get('/', authMiddleware, UserController.index);
routes.get('/:id', UserController.show);
routes.put('/:id', multer(multerConfig).single('file'), UserController.update);
routes.delete('/:id', UserController.destroy);

export default routes;