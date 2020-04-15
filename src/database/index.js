const Sequelize = require('sequelize');
const requireDir = require('require-dir');

const { User, Monitoria } = requireDir('../models/');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

User.init(connection);
Monitoria.init(connection);

module.exports = connection;