import { Router } from 'express';
import ProposalController from '../controllers/ProposalController';

const routes = new Router();

routes.post('/:user_id/monitorias/:monitoria_id/proposta', ProposalController.store);
routes.get('/:user_id/monitorias/:monitoria_id/proposta', ProposalController.index);


export default routes;