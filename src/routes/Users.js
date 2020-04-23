import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';

const routes = new Router();

import UserController from '../controllers/UserController';

routes.post('/', UserController.store);
routes.get('/', UserController.index);
routes.get('/:id', UserController.show);
routes.put('/:id', multer(multerConfig).single('file'), UserController.update);
routes.delete('/:id', UserController.destroy);

export default routes;