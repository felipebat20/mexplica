const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const MonitoriaController = require('./controllers/MonitoriaController');

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', multer(multerConfig).single('file'), UserController.update);
routes.delete('/users/:id', UserController.destroy);

routes.post('/users/:user_id/monitorias', MonitoriaController.store);

routes.post('/posts', multer(multerConfig).single('file'), (req, res) => {
    console.log(req.file);
    return res.json({
        message: "Tudo certo?"
    });
});

module.exports = routes;