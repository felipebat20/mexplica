import { Router } from 'express';
import SubjectController from '../controllers/SubjectController';

const routes = new Router();

routes.get('/:user_id/subjects', SubjectController.index);
routes.post('/:user_id/subjects', SubjectController.store);


export default routes;