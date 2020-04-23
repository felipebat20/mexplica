import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../models/User';
import Monitoria from '../models/Monitoria';

const connection = new Sequelize(dbConfig);

User.init(connection);
Monitoria.init(connection);

Monitoria.associate(connection.models);

export default connection;