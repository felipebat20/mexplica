import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../models/User';
import Monitoria from '../models/Monitoria';
import Subject from '../models/Subject';

const connection = new Sequelize(dbConfig);

User.init(connection);
Monitoria.init(connection);
Subject.init(connection);

User.associate(connection.models);
Monitoria.associate(connection.models);
Subject.associate(connection.models);

export default connection;