import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../models/User';
import Monitoria from '../models/Monitoria';
import Subject from '../models/Subject';
import Proposal from '../models/Proposal';

const connection = new Sequelize(dbConfig);

User.init(connection);
Monitoria.init(connection);
Subject.init(connection);
Proposal.init(connection);

User.associate(connection.models);
Monitoria.associate(connection.models);
Subject.associate(connection.models);
Proposal.associate(connection.models);

export default connection;