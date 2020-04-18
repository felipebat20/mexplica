const express = require('express');
const MonitoriaController = require('../controllers/MonitoriaController');

const routes = express.Router();

routes.post('/:user_id/monitorias/', MonitoriaController.store);
routes.get('/:user_id/monitorias/', MonitoriaController.index);
routes.get('/:user_id/monitorias/:id', MonitoriaController.show);
routes.put('/:user_id/monitorias/:id', MonitoriaController.update);
routes.delete('/:user_id/monitorias/:id', MonitoriaController.delete);

module.exports = routes;