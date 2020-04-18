const express = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');

const routes = express.Router();

const UserController = require('../controllers/UserController');

routes.post('/', UserController.store);
routes.get('/', UserController.index);
routes.get('/:id', UserController.show);
routes.put('/:id', multer(multerConfig).single('file'), UserController.update);
routes.delete('/:id', UserController.destroy);

module.exports = routes;