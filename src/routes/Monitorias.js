import { Router } from 'express';
import MonitoriaController from '../controllers/MonitoriaController';

const routes = new Router();

routes.post('/monitorias', MonitoriaController.index);

routes.post('/:user_id/monitorias/', MonitoriaController.store);
routes.get('/:user_id/monitorias/', MonitoriaController.list);
routes.get('/:user_id/monitorias/:id', MonitoriaController.show);
routes.put('/:user_id/monitorias/:id', MonitoriaController.update);
routes.delete('/:user_id/monitorias/:id', MonitoriaController.delete);

export default routes;